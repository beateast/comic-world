AFRAME.registerComponent("comic", {
    init: function(){
        this.createCard();
    },
    createCard: function(){
        const thunbnail = [
            {
                id: "superman",
                title: "SuperMan",
                url: "./assets/thumbnails/superman.png",

            },
            {
                id: "spiderman",
                title: "SpiderMan",
                url: "./assets",
            },
            {
                id: "batman",
                title: "BatMan",
                url: "./",
            },
            {
                id: "ironman",
                title: "IronMan",
                url: "",
            },
        ];
        let previousXPosition = -60;

        for(var item of thumbnail){
            const posX = previousXPosition + 25;
            const posY = 10;
            const posZ = -40;
            previousXPosition = posX;
        }
    }
});