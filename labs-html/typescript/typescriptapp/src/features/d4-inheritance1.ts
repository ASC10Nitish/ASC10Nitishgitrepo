class Phone {
    phoneFeature : string;
    constructor(feature : string){
        console.log("Phone constructor called and feature is initialized");
        this.phoneFeature = feature;
    }
    
    displayDetails() : void {
        console.log("Phone feature are  " + this.phoneFeature);
    }
}

class SmartPhone extends Phone {
    constructor(public feature : string, public  cameraSpecs : string){
        
        super(feature);//used to call base class constructor

        console.log("SmartPhone constructor completed");
    }

   displayDetails(): void {
       console.log("SmartPhone feature are  " + this.phoneFeature + " and camera specs are " + this.cameraSpecs);
   }
}

const phone1 = new SmartPhone("Phone with touch screen, calling, messaging, camera, music player, and internet browsing features","108 mega pixel camera!" );
phone1.displayDetails();