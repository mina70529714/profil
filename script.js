// ملفات الترجمة
const translations = {
    en: {
      welcome: "Welcome to our website!",
      description: "This is a multilingual web page.",
      language: "Change Language"
    },
    ar: {
      welcome: "مرحبًا بكم في موقعنا!",
      description: "هذه صفحة ويب متعددة اللغات.",
      language: "تغيير اللغة"
    }
  };
  
  // اللغة الحالية
  let currentLanguage = "en";
  
  // عناصر HTML
  const welcomeEl = document.getElementById("welcome");
  const descriptionEl = document.getElementById("description");
  const changeLanguageBtn = document.getElementById("change-language");
  
  // تغيير النصوص بناءً على اللغة
  function translatePage(language) {
    welcomeEl.textContent = translations[language].welcome;
    descriptionEl.textContent = translations[language].description;
    changeLanguageBtn.textContent = translations[language].language;
  
    // تغيير الاتجاه
    document.body.className = language === "ar" ? "rtl" : "ltr";
  }
  
  // إضافة حدث لتغيير اللغة
  changeLanguageBtn.addEventListener("click", () => {
    currentLanguage = currentLanguage === "en" ? "ar" : "en";
    translatePage(currentLanguage);
  });
  
  // تحميل النصوص عند فتح الصفحة
  translatePage(currentLanguage);
  