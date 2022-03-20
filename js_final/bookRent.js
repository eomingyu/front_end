const frm = document.forms[0];
const rentNo = frm.rent_no;     
const memIdx = frm.mem_idx;
const bcode_ = frm.bcode;
const rentDate = frm.rent_date;      
const expDate = frm.exp_date;      
const today = new Date();
const period = 14;                //대여기간

rentDate.value = date_form(today);

function date_form(today){
    const year = today.getFullYear();
    const month = (today.getMonth()+1).toString().padStart(2,0);
    const date = today.getDate().toString().padStart(2,0);
    return [year,month,date].join('-');
}
function valid_check(){
    if(memIdx.value == ""){
        alert('회원번호 입력은 필수입니다.')
        memIdx.focus();          
    } else
    if(bcode_.value == ""){
        alert('책코드번호 입력은 필수입니다.')
        bcode_.focus();          
    }else{
        let dayAfter= new Date(rentDate.value);
        dayAfter.setDate(dayAfter.getDate()+period);
        expDate.value = date_form(dayAfter)
        alert(`대여기간은 ${period}일 입니다.\n반납예정일은 ${expDate.value} 입니다.`)
    }
    
    
}