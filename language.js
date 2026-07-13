(() => {
  const EL = {"Welcome to S. Theodosiou Motors": "Καλώς ήρθατε στη S. Theodosiou Motors", "Home Panel": "Αρχική", "Browse Cars": "Αυτοκίνητα", "Contact Us": "Επικοινωνία", "Where to Find Us": "Τοποθεσία", "JAPANESE IMPORT CARS IN LIMASSOL": "ΙΑΠΩΝΙΚΑ ΕΙΣΑΓΟΜΕΝΑ ΑΥΤΟΚΙΝΗΤΑ ΣΤΗ ΛΕΜΕΣΟ", "Quality Cars You Can Trust": "Ποιοτικά αυτοκίνητα που μπορείτε να εμπιστευτείτε", "At S. Theodosiou Motors, we specialise in offering a carefully selected range of high-quality Japanese import cars in Limassol.": "Στη S. Theodosiou Motors ειδικευόμαστε στην προσφορά προσεκτικά επιλεγμένων, υψηλής ποιότητας εισαγόμενων αυτοκινήτων από την Ιαπωνία στη Λεμεσό.", "Every vehicle is thoroughly inspected to ensure exceptional reliability, performance, and value, giving you complete confidence in your purchase.": "Κάθε όχημα ελέγχεται διεξοδικά ώστε να εξασφαλίζει εξαιρετική αξιοπιστία, απόδοση και αξία, προσφέροντάς σας απόλυτη σιγουριά για την αγορά σας.", "Our Japanese imported vehicles are chosen for their durability, efficiency, and excellent driving experience, providing customers with trusted cars built to high standards.": "Τα εισαγόμενα ιαπωνικά οχήματά μας επιλέγονται για την αντοχή, την οικονομία και την εξαιρετική οδηγική εμπειρία τους, προσφέροντας αξιόπιστα αυτοκίνητα υψηλών προδιαγραφών.", "Browse Available Cars": "Δείτε τα διαθέσιμα αυτοκίνητα", "Quality Inspected": "Ποιοτικός έλεγχος", "Every vehicle is carefully checked before being offered for sale.": "Κάθε όχημα ελέγχεται προσεκτικά πριν διατεθεί προς πώληση.", "Japanese Imports": "Ιαπωνικές εισαγωγές", "Reliable and efficient Japanese vehicles selected to high standards.": "Αξιόπιστα και οικονομικά ιαπωνικά οχήματα, επιλεγμένα με υψηλά πρότυπα.", "Trusted Service": "Αξιόπιστη εξυπηρέτηση", "Honest information and professional support throughout your purchase.": "Ειλικρινής ενημέρωση και επαγγελματική υποστήριξη σε όλη τη διαδικασία αγοράς.", "OUR SELECTION": "Η ΕΠΙΛΟΓΗ ΜΑΣ", "Featured Cars": "Προτεινόμενα αυτοκίνητα", "Discover some of our currently available vehicles.": "Ανακαλύψτε μερικά από τα οχήματα που είναι διαθέσιμα αυτή τη στιγμή.", "Year:": "Έτος:", "Engine:": "Κινητήρας:", "Fuel:": "Καύσιμο:", "Mileage:": "Χιλιόμετρα:", "Colour:": "Χρώμα:", "Price:": "Τιμή:", "View Details": "Περισσότερες πληροφορίες", "View All Available Cars": "Δείτε όλα τα διαθέσιμα αυτοκίνητα", "Looking for Your Next Car?": "Ψάχνετε το επόμενο αυτοκίνητό σας;", "Visit us in Limassol or contact our team for more information about any of our available vehicles.": "Επισκεφθείτε μας στη Λεμεσό ή επικοινωνήστε με την ομάδα μας για περισσότερες πληροφορίες σχετικά με τα διαθέσιμα οχήματά μας.", "Find Our Location": "Βρείτε την τοποθεσία μας", "Browse Our Cars": "Δείτε τα αυτοκίνητά μας", "Hybrid": "Υβριδικό", "Hybrid/Petrol": "Υβριδικό/Βενζίνη", "Black": "Μαύρο", "Phone:": "Τηλέφωνο:", "Facebook:": "Facebook:", "Visit our Facebook Page": "Επισκεφθείτε τη σελίδα μας στο Facebook", "Visit us at Spyrou Kyprianou Ave 2, Limassol, Cyprus.": "Επισκεφθείτε μας στη Λεωφόρο Σπύρου Κυπριανού 2, Λεμεσός, Κύπρος.", "📍 Open in Google Maps": "📍 Άνοιγμα στους Χάρτες Google", "Make:": "Μάρκα:", "Model:": "Μοντέλο:", "A high quality Toyota Yaris Hybrid X, inspected and ready for its new owner. Reliable, economical and perfect for everyday driving.": "Ένα υψηλής ποιότητας Toyota Yaris Hybrid X, ελεγμένο και έτοιμο για τον νέο του ιδιοκτήτη. Αξιόπιστο, οικονομικό και ιδανικό για καθημερινή οδήγηση.", "A high quality Toyota Yaris Cross Hybrid G, offering excellent fuel efficiency, comfort and reliability. A practical SUV perfect for everyday driving with modern technology and Toyota's trusted hybrid system.": "Ένα υψηλής ποιότητας Toyota Yaris Cross Hybrid G που προσφέρει εξαιρετική οικονομία καυσίμου, άνεση και αξιοπιστία. Ένα πρακτικό SUV, ιδανικό για καθημερινή οδήγηση, με σύγχρονη τεχνολογία και το αξιόπιστο υβριδικό σύστημα της Toyota."};
  const EN = Object.keys(EL).reduce((a,k)=>{a[EL[k]]=k;return a;},{});
  const normalize = s => s.replace(/\s+/g, ' ').trim();
  const textNodes = [];
  const walker = document.createTreeWalker(document.body, NodeFilter.SHOW_TEXT, {
    acceptNode(node) {
      if (!node.parentElement || ['SCRIPT','STYLE','NOSCRIPT'].includes(node.parentElement.tagName)) return NodeFilter.FILTER_REJECT;
      return normalize(node.nodeValue) ? NodeFilter.FILTER_ACCEPT : NodeFilter.FILTER_REJECT;
    }
  });
  while (walker.nextNode()) textNodes.push(walker.currentNode);
  textNodes.forEach(n => n.__en = normalize(n.nodeValue));
  const originalTitle = document.title;
  const titleEL = {
    'S. Theodosiou Motors':'S. Theodosiou Motors',
    'Browse Cars - S.Theodosiou Motors':'Αυτοκίνητα - S. Theodosiou Motors',
    'Contact - S. Theodosiou Motors':'Επικοινωνία - S. Theodosiou Motors',
    'Where to Find Us - S. Theodosiou Motors':'Τοποθεσία - S. Theodosiou Motors'
  };
  function setLanguage(lang) {
    document.documentElement.lang = lang;
    textNodes.forEach(n => {
      const key = n.__en;
      let value = key;
      if (lang === 'el') {
        for (const [from, to] of Object.entries(EL).sort((a,b) => b[0].length - a[0].length)) {
          value = value.split(from).join(to);
        }
      }
      const lead = n.nodeValue.match(/^\s*/)?.[0] || '';
      const tail = n.nodeValue.match(/\s*$/)?.[0] || '';
      n.nodeValue = lead + value + tail;
    });
    document.title = lang === 'el' ? (titleEL[originalTitle] || originalTitle) : originalTitle;
    document.querySelectorAll('[data-lang]').forEach(b => {
      const active = b.dataset.lang === lang;
      b.classList.toggle('active', active);
      b.setAttribute('aria-pressed', String(active));
    });
    localStorage.setItem('siteLanguage', lang);
  }
  document.querySelectorAll('[data-lang]').forEach(b => b.addEventListener('click', () => setLanguage(b.dataset.lang)));
  const saved = localStorage.getItem('siteLanguage');
  setLanguage(saved || (navigator.language.toLowerCase().startsWith('el') ? 'el' : 'en'));
})();