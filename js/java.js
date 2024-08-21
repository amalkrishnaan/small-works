document.getElementById("btn").addEventListener('click',()=>{
    let xhr=new XMLHttpRequest();//create an object for xhr
    xhr.open("GET",'https://jsonplaceholder.typicode.com/todos/1');
    xhr.onload=()=>{
        console.log(xhr);
        if(xhr.status==200){
          data=JSON.parse(xhr.response)
          console.log(data.id);
        }else{
            alert("invalid api");
        }
        
    }
    xhr.onerror=()=>alert("requst faild");
    xhr.send();

})