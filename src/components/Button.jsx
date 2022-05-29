import styles from "./Button.module.css";

function Button({ myFun , title, onClick, disabled, id }) { 
    //console.log(title,id);
  return (
    <button onClick = {()=>{
         if(id==="PREV"){
          onClick(-1)
         } 
         if(id==="NEXT"){
          onClick(1)
         } 

         if(id === "SORT_BUTTON"){
            
             myFun(true)
         }
    }} id={id} data-testid="button-component" className={styles.button}>
      {title}
    </button>
  );
}

export default Button;
