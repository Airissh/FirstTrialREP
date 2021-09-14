function func_1() {
   // Кусок проверки,введены ли все нужные данные
   if (document.getElementById("lnm").value.length == 0) {
      alert("Введите Фамилию");
      return 0;
   }
   if (document.getElementById("nm").value.length == 0) {
      alert("Введите Имя");
      return 0;
   }
   if (
      !document.getElementById("1").checked &&
      !document.getElementById("2").checked &&
      !document.getElementById("3").checked &&
      !document.getElementById("4").checked
   ) {
      alert("Укажите курс!");
      return 0;
   }
   // конец этого куска

   win = window.open();

   let kurs1;
   if (document.getElementById("1").checked)
      kurs1 = document.getElementById("1").value;
   else if (document.getElementById("2").checked)
      kurs1 = document.getElementById("2").value;
   else if (document.getElementById("3").checked)
      kurs1 = document.getElementById("3").value;
   else if (document.getElementById("4").checked)
      kurs1 = document.getElementById("4").value;

   win.document.write(
      "<u>Факультет информационных технологий</u> <br>" +
         "Студент <u>" +
         document.getElementById("lnm").value +
         "</u> специальность <u>" +
         document.getElementById("spec").value +
         "</u> курс <u>" +
         kurs1 +
         "</u>  должен сдавать следующие предметы:<ul>"
   );

   let subj = document.getElementsByName("subjects");

   for (i = 0; i < 5; i++) {
      if (subj[i].checked)
         win.document.write("<li><u>" + subj[i].value + "</u></li>");
   }
   win.document.write("</ul>");
}
function func_2() {
   let win;
   win = window.open();
   win.document.write("<ul>");
   let subj = document.getElementsByName("subjects");
   for (i = 0; i < 5; i++) {
      if (subj[i].checked)
         win.document.write("<li><u>" + subj[i].value + "</u></li>");
   }
   win.document.write("</ul>");
}
