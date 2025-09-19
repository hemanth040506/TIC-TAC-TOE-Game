let boxes=document.querySelectorAll(".box");
let resetbtn=document.querySelector(".resetbtn");
let newbtn=document.querySelector("#new-btn");
let msgcontainer=document.querySelector(".msg-container");
let msg=document.querySelector(".msg");

let turnO=true;

const winpatterns=[
    [0,1,2],
    [1,4,7],
    [2,5,8],
    [2,4,6],
    [3,4,5],
    [6,7,8],
    [0,3,6],
    [0,4,8]
];

boxes.forEach((box) =>{
    box.addEventListener("click", () =>{
         console.log("Box was Clicked");
         if(turnO)
         {
            box.innerText="O";
            turnO=false;
         }
         else
         {
            box.innerText="X";
            turnO=true;
         }
         box.disabled=true;

         checkWinner();
    });
});

const showWinner=(winner) => {
      msg.innerText=`Congratulations, Winner is ${winner}`;
      msgcontainer.classList.remove("hide");
};


const disableboxes= () =>
{
    for(box of boxes)
    {
        box.disabled=true;
    }
}; 

const enableboxes= () =>{
    for(box of boxes)
    {
        box.disabled=false;
        box.innerText="";
    }
}

newbtn.addEventListener("click",() =>
{
    msgcontainer.classList.add("hide");
    enableboxes();
    turnO=true;
});

resetbtn.addEventListener("click",() =>
{
    msgcontainer.classList.add("hide");
    turnO=true;
    enableboxes(); 
});

const checkWinner= () => {
    for(let pattern of  winpatterns)
    {
        let pos1val=boxes[pattern[0]].innerText;
        let pos2val=boxes[pattern[1]].innerText;
        let pos3val=boxes[pattern[2]].innerText;

        if(pos1val!="" && pos2val!="" && pos3val!="")
        {
        if(pos1val===pos2val && pos2val===pos3val)
        {
            console.log("winner ",pos1val);
            showWinner(pos1val);
            disableboxes();
            return;
        }
       }
    } 
    Draw(); 
};

const Draw=() =>{
    let isdraw=true;
    for(let box of boxes)
    {
        
    if(box.innerText==="")
    {
     isdraw=false;
     break;   
    }
    }
    if(isdraw==true)
    {
        console.log("Draw");
        msg.innerText="Its a Draw";
        msgcontainer.classList.remove("hide");
        disableboxes();
    }
}
