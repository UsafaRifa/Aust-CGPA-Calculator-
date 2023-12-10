console.log('logs');
let b;
if(typeof b =="undefined")console.log('ds')
class calculator{

    constructor()
    {
       
    }
    set_grade_credit(T_one, T_two, T_three, T_four, T_five, L_one, L_two, L_three, L_four)
    {
        this.T_one = T_one;
        this.T_two = T_two;
        this.T_three = T_three;
        this.T_four = T_four;
        this.T_five = T_five;
        this.L_one = L_one;
        this.L_two = L_two;
        this.L_three = L_three;
        this.L_four = L_four;
        console.log(this.T_one, this.T_two, this.T_three, this.T_four,this.T_five, this.L_one, this.L_two, this.three, this.four);
    }
    check(result)
    {
        if (result.grade < 1)
            result.credit = 0.00;
    }
    cgpa_calculation()
    {
        
          this.credit_cgpa = (this.T_one.credit * this.T_one.grade) + (this.T_two.credit * this.T_two.grade) + (this.T_three.credit * this.T_three.grade) + (this.T_four.credit * this.T_four.grade) + (this.T_five.credit * this.T_five.grade) + (this.L_one.credit * this.L_one.grade) + (this.L_two.credit * this.L_two.grade) + (this.L_three.credit * this.L_three.grade)+(this.L_four.credit*this.L_four.grade);

        this.total_credit = (this.T_one.credit) + (this.T_two.credit) + (this.T_three.credit) + (this.T_four.credit) + (this.T_five.credit) + (this.L_one.credit) + (this.L_two.credit) + (this.L_three.credit) + (this.L_four.credit);
        
        this.cgpa = this.credit_cgpa / this.total_credit;
        // this.cgpa.toFixed(3);
        
    }
    extra_grade(L_five)
    {
        this.credit_cgpa += (L_five.credit * L_five.grade);
        this.total_credit += L_five.credit;
        this.cgpa = this.credit_cgpa / this.total_credit;
        console.log(this.credit_cgpa,this.total_credit);
    }
    extra_4grade(L_five)
    {
        this.credit_cgpa += (L_five.credit * L_five.grade);
        this.total_credit += L_five.credit;
        this.cgpa = this.credit_cgpa / this.total_credit;
        console.log(this.credit_cgpa,this.total_credit);
    }

}

function pair(credit,grade)
{
    this.credit = credit;
    this.grade = grade;
}


// if (l5.value == null)
  
apply.addEventListener('click', function () {
   
    let T1 = new pair(parseFloat(c1.innerHTML), parseFloat(t1.value));
    let T2 = new pair(parseFloat(c2.innerHTML), parseFloat(t2.value));
    let T3 = new pair(parseFloat(c3.innerHTML), parseFloat(t3.value));
    let T4 = new pair(parseFloat(c4.innerHTML), parseFloat(t4.value));
    let T5 = new pair(parseFloat(c5.innerHTML), parseFloat(t5.value));
    
    
    let L1 = new pair(parseFloat(lc1.innerHTML), parseFloat(l1.value));
    let L2 = new pair(parseFloat(lc2.innerHTML), parseFloat(l2.value));
    let L3 = new pair(parseFloat(lc3.innerHTML), parseFloat(l3.value));
    let L4 = new pair(parseFloat(lc4.innerHTML), parseFloat(l4.value));
    

    let one_1 = new calculator();
    one_1.set_grade_credit(T1, T2, T3, T4, T5, L1, L2, L3, L4);
    
    one_1.check(T1);
    one_1.check(T2);
    one_1.check(T3);
    one_1.check(T4);
    one_1.check(T5);

    one_1.check(L1);
    one_1.check(L2);
    one_1.check(L3);
    one_1.check(L4);

    one_1.cgpa_calculation();


    if (parseInt(localStorage.getItem('temp_active'))== 6)
    {
        console.log('3.2');
        let L5 = new pair(parseFloat(lc5.innerHTML), parseFloat(l5.value));
        one_1.extra_grade(L5);
        
        // console.log(L5);
    }

    else if ((parseInt(localStorage.getItem('temp_active')) == 7))
    {
        console.log('4.1');
        let L6 = new pair(parseFloat(lc5.innerHTML), parseFloat(l5.value));
        one_1.extra_4grade(L6);
    }


    result.innerHTML = `${one_1.cgpa.toFixed(2)}`;
    one_1.cgpa = 0.00;
    // console.log(one_1.cgpa.toFixed(3))
    
    // console.log(t1.value);

    //  console.log(T1, T2, T3, T4, T5);
    //  console.log(L1, L2, L3, L4);
    
})
// console.log(typeof lc4.innerHTML)


