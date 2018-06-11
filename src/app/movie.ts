export class Movie {

        public imgUrl: String;
        public title: String;
        public year: Number;
        public price: Number;
        public shortDescription: String;
        public fullDescription: String;
        public director: String;
        public reviews: [{
             name: String,
             rating: {
                type: Number,
                min: 0,
                max: 5
            },
             text: String
        }];

    constructor() {
    }
}

