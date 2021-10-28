export interface IMovie{
    title:string;
    id:number;
    release_date: number; 
    vote_average: number; 
    popularity: number;
    overview:string;
    logo:any;
    bacground: any;
    adult:boolean;
    backdrop_path: string;
    poster_path: string;
    belongs_to_collection:null;
    budget:number;
    genres:[
        id:number,
        name:string,
        id:number,
        name:string,
        id:number,
        name:string
    ];
    homepage:string;
    imdb_id:string;
    original_language: string;
    original_title:string;
    production_companies:[];
    production_countries:[
        {iso_3166_1:string,
        name: string}
    ];
    revenue:number;
    runtime:number;
    spoken_languages:[];
    status:string;
    tagline:string;
    video:boolean;
    vote_count:number
}