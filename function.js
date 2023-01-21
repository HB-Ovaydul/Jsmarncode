/**
 *  Student Marks / gp Calculate
 */

function Result(){
    this.gpa = function(mark) {
         this.gpa;
         if(mark >= 0 && mark < 32){
             gpa = 1;
         }else if(mark >= 33 && mark < 39){
             gpa = 1.5;
         }else if(mark >= 39 && mark < 49){
             gpa = 2;
         }else if(mark >= 49 && mark < 59){
             gpa = 2.5;
         }else if(mark >= 59 && mark < 69){
             gpa = 3;
         }else if(mark >= 69 && mark < 79){
             gpa = 3.5;
         }else if(mark >= 79 && mark < 89){
             gpa = 4;
         }else if(mark >= 89 && mark < 100){
             gpa = 5;
         }
         return gpa;

      }

      /**
       * Grade Calculkate 
       */
      this.grade = function(grade){
         this.gr;
         if(grade >= 0 && grade < 32){
             gr = 'F';
         }else if(grade >= 33 && grade < 39){
             gr = 'D';
         }else if(grade >= 39 && grade < 49){
             gr = 'C';
         }else if(grade >= 49 && grade < 59){
             gr = 'B';
         }else if(grade >= 59 && grade < 69){
             gr = 'A-';
         }else if(grade >= 69 && grade < 79){
             gr = 'A';
         }else if(grade >= 79 && grade < 89){
             gr = 'A+';
         }else if(grade >= 89 && grade < 100){
             gr = 'GOLDEN A+';
         }
         return gr;

      }

      /**
       * cgpa Calculate
       */

      this.cgpa = function(b, e, m, s , ss, i){
            let total_gpa = (b + e + m + s + ss + i);
            let cgpa = total_gpa/6;

            if(b == 0 || e == 0 || s == 0 || ss == 0 || i == 0){
                  return `You Are Fail`;
            }else{
               return `Congratulations Your Cgpa ${cgpa.toFixed(1)}`;
            }
      }
}
let conv = new Result();
let congr = new Result();
let concg = new Result();



