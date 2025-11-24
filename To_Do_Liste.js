const prompt=require("prompt-sync")();

const Taches=[]


function AfficherTaches(){
    

    
    if (!Taches.length) {
        console.log("ne trouve aucun tache");
       
    }
    else{

        Taches.map(ele => {
           ele.isDone ? "Terminée" : "En attente";
            console.table(Taches);
        });
    }



}


function  AddTache(){
    let description=prompt("Entrez la description de la tâche : ")
    Taches.push({id:Taches.length+1,description ,isDone:false })
    console.log(Taches)
}

function serchTache(){
        let nomeSrch=prompt(" entrer le qui vas chercher :").toLowerCase();
        const reslutaName=  Taches.filter((ele)=> ele.description.toLowerCase().includes(nomeSrch));

            if (!reslutaName.length) {
        console.log("ne trouve aucun tache de cette titre");
       
    }else{

        console.table(reslutaName)
    }
    

}
function  ModifierTach(){
    let idS=Number(prompt("entrer id de description qui vas modifier"));
    let nzwdes=prompt("entrer la nouvelle discription ")

    let rsetache=Taches.find(ele=>ele.id===idS)

    if(!rsetache){
        console.log("ne trouve aucun tache de cette id");

    }
    else{
        rsetache.description=nzwdes;
        console.log(" la descrtion est modifier")
    }
    
}
function DeleteTache(){
    let idDelete = Number(prompt("entrer id de description qui vas supprimer :"));
    // findIndex=> kat3tina lblssa dyla index 
    let index = Taches.findIndex(ele => ele.id === idDelete);

    if(index === -1){
        console.log("ne trouve aucun tache de cette id");
    }
     else {
        //  ghdi tsupprime lina ele wahd ghadi tbda mn index 
        Taches.splice(index, 1); 
        console.table(Taches);
        console.log(`la tache de ${idDelete} est supprime`);
    }
}

function MarqTache(){
        let idStatus = Number(prompt("entrer id de description qui  remettre son status:"));
        let newStatus=prompt("entrer status(terminee/en attente) de cette dache :");
         let modifiTach=Taches.find(ele=>ele.id===idStatus)
        
        
    if(!modifiTach){
        console.log("ne trouve aucun tache de cette id");

    }
    else{
        if (newStatus === "terminee") {
            modifiTach.isDone = true;
        } else if (newStatus === "en attente") {
            modifiTach.isDone = false;
        } else {
            console.log("status invalide !");
            return;
        }

      
        console.log(" la status  est modifier")
    }


}
function  ShowStatus() {
    let choix = prompt("Afficher termine ou  en attente ? ").toLowerCase();

    let filterValue;

    if (choix === "termine") {
        filterValue = true;
    }
    else if (choix === "en attente") {
        filterValue = false;
    }
    else {
        console.log("ne trouve pas cette option!");
        return;
    }

    const result = Taches.filter(ele => ele.isDone === filterValue);

    if (!result.length) {
        console.log("Aucune tâche trouvée !");
    } else {
        console.table(result);
    }
}






const menu = `
   === To-Do List ===

1. Afficher les tâches
2. Ajouter une tâche
3. Rechercher une tâche
4. Modifier une tâche
5. Supprimer une tâche
6. Marquer une tâche comme terminée
7. Afficher tâches terminées / en attente
0. Quitter
`;

console.log(menu);
while (true) {
  const option = Number(prompt("Choisissez une option :  "));
  if (option === 0) {
    console.log("Quitter programme");
    break;
  }

  switch (option) {
    case 1:
      AfficherTaches();
      break;
    case 2:
      AddTache();
      break;
    case 3:
      serchTache();
      break;
    case 4:
      ModifierTach();
      break;
    case 5:
      DeleteTache();
      break;
    case 6:
      MarqTache();
      break;
    case 7:
      ShowStatus();
      break;

    default:
      console.log(menu);

      break;
  }
}