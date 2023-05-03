// 폼요소 가지고 오기
var check = document.getElementById('shippingInfo');
var shippingName = document.getElementById('shippingName');
var shippingTel = document.getElementById('shippingTel');
var ShippingAddr = document.getElementById('shippingAddr');
var billingName = document.getElementById('billingName');
var billingTel = document.getElementById('billingTel');
var billingAddr = document.getElementById('billingAddr');
var submitBtn = document.getElementById("order");

// 체크 상자 확인
check.addEventListener( 'click', function(){
    // check의 checked 속성 확인, 그 값이 true일 경우 주문 정보에 있는 요소의 내용 가져와 배송 정보에 대입
    console.log(check.value);
    if( check.checked === true ){
		shippingName.value = billingName.value;
        shippingAddr.value = billingAddr.value;
        shippingTel.value = billingTel.value;
    }
    else{  // 배송 정보 직접 입력하도록 배송 정보 필드 지우기
            shippingName.value = null;
            shippingAddr.value = null;
            shippingTel.value = null;
		}
});

// 폼 요소에서 입력값 검증하기
// 이름은 4자~14자 
// 전화번호는 13자
// 주소는 비어있을 경우
submitBtn.addEventListener('click', function(){
    if( billingName.length < 4 || billingName.length > 15 ){
        alert('주문정보 이름을 입력하세요.(4~12자)');
        billingName.focus();
        return false;
    }
    if( shippingName.length < 4 || shippingName.length > 15 ){
        alert('배송정보 이름을 입력하세요.(4~12자)');
        shippingName.focus();
        return false;
    }
    if( billingTel.length != 13  ){
        alert('주문정보 전화번호를 입력하세요.(13자)');
        billingTel.focus();
        return false;
    }
    if( shippingTel.length != 13  ){
        alert('배송정보 전화번호를 입력하세요.(13자)');
        shippingTel.focus();
        return false;
    }
    if( billingAddr.length ==0  ){
        alert('주문정보 주소를 입력하세요.');
        billingAddr.focus();
        return false;
    }
    if( shippingAddr.length ==0  ){
        alert('주문정보 주소를 입력하세요.');
        shippingAddr.focus();
        return false;
    }
     return true;
   
});

