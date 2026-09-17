/**
 * Firebase Integration Module for SMAN 10 Bekasi
 * Cloud Firestore Real-time Database & Configuration Sync
 */

const FIREBASE_CONFIG_STORAGE_KEY = "sman10bks_firebase_config";

window.FirebaseSync = {
  db: null,
  isInitialized: false,
  isAvailable: false,

  // Mendapatkan kredensial Firebase dari LocalStorage atau default
  getConfig: function () {
    try {
      const stored = localStorage.getItem(FIREBASE_CONFIG_STORAGE_KEY);
      if (stored) {
        return JSON.parse(stored);
      }
    } catch (e) {
      console.warn("Gagal membaca kredensial Firebase lokal:", e);
    }
    return {
      apiKey: "",
      authDomain: "",
      projectId: "",
      storageBucket: "",
      messagingSenderId: "",
      appId: ""
    };
  },

  // Menyimpan kredensial baru
  saveConfig: function (cfg) {
    localStorage.setItem(FIREBASE_CONFIG_STORAGE_KEY, JSON.stringify(cfg));
    return this.init();
  },

  // Inisialisasi Firebase App & Firestore
  init: function () {
    const cfg = this.getConfig();
    if (!cfg.apiKey || !cfg.projectId) {
      this.isInitialized = false;
      this.isAvailable = false;
      return false;
    }

    if (typeof firebase === "undefined") {
      console.warn("Firebase SDK script belum termuat di halaman.");
      return false;
    }

    try {
      // Cek apakah app sudah pernah diinisialisasi
      let app;
      if (firebase.apps && firebase.apps.length > 0) {
        app = firebase.apps[0];
      } else {
        app = firebase.initializeApp(cfg);
      }

      this.db = firebase.firestore(app);
      this.isInitialized = true;
      this.isAvailable = true;
      console.log(`[Firebase] Terhubung ke project: ${cfg.projectId}`);
      return true;
    } catch (err) {
      console.error("[Firebase] Gagal inisialisasi:", err);
      this.isInitialized = false;
      this.isAvailable = false;
      return false;
    }
  },

  // Mengambil konfigurasi sekolah dari Firestore
  loadSchoolConfig: async function () {
    if (!this.isAvailable || !this.db) return null;
    try {
      const docRef = this.db.collection("schools").doc("sman10bekasi");
      const docSnap = await docRef.get();
      if (docSnap.exists) {
        console.log("[Firebase] Konfigurasi sekolah berhasil dimuat dari Firestore.");
        return docSnap.data();
      }
    } catch (err) {
      console.warn("[Firebase] Gagal memuat konfigurasi sekolah:", err);
    }
    return null;
  },

  // Menyimpan konfigurasi sekolah ke Firestore
  saveSchoolConfig: async function (configData) {
    if (!this.isAvailable || !this.db) return false;
    try {
      const docRef = this.db.collection("schools").doc("sman10bekasi");
      await docRef.set({
        ...configData,
        updatedAt: new Date().toISOString()
      }, { merge: true });
      console.log("[Firebase] Konfigurasi sekolah berhasil disimpan ke Firestore.");
      return true;
    } catch (err) {
      console.error("[Firebase] Gagal menyimpan konfigurasi:", err);
      return false;
    }
  },

  // Mengambil daftar berita & artikel dari Firestore
  loadNews: async function () {
    if (!this.isAvailable || !this.db) return null;
    try {
      const colRef = this.db.collection("articles");
      const snapshot = await colRef.get();
      if (!snapshot.empty) {
        const news = [];
        snapshot.forEach(doc => {
          news.push(doc.data());
        });
        console.log(`[Firebase] Berhasil memuat ${news.length} artikel dari Firestore.`);
        return news;
      }
    } catch (err) {
      console.warn("[Firebase] Gagal memuat artikel:", err);
    }
    return null;
  },

  // Menyimpan daftar berita ke Firestore
  saveNews: async function (articlesList) {
    if (!this.isAvailable || !this.db) return false;
    try {
      const batch = this.db.batch();
      articlesList.forEach(art => {
        const docId = String(art.id || (art.title ? art.title.toLowerCase().replace(/[^a-z0-9]/g, "-") : Date.now()));
        const ref = this.db.collection("articles").doc(docId);
        batch.set(ref, {
          ...art,
          id: docId,
          updatedAt: new Date().toISOString()
        }, { merge: true });
      });
      await batch.commit();
      console.log(`[Firebase] Berhasil menyimpan ${articlesList.length} artikel ke Firestore.`);
      return true;
    } catch (err) {
      console.error("[Firebase] Gagal menyimpan artikel:", err);
      return false;
    }
  },

  // Test koneksi ke Firestore
  testConnection: async function (cfg) {
    if (typeof firebase === "undefined") {
      throw new Error("Library Firebase SDK belum termuat.");
    }
    const testAppName = "testApp_" + Date.now();
    try {
      const testApp = firebase.initializeApp(cfg, testAppName);
      const testDb = firebase.firestore(testApp);
      // Coba akses koleksi ping
      await testDb.collection("_ping").doc("check").set({ ping: true, time: Date.now() }, { merge: true });
      await testApp.delete();
      return true;
    } catch (err) {
      throw err;
    }
  }
};
