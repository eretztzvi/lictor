
export class Globals {

    static cloudinaryPreset;
    static cloudinaryCloudName;
    static cloudinaryUploadLink;

    static mainUrl;
    static login;
    static getAllPersonsForUser;
    static addLike;
    static getAllUserLikes;
    
    static init() {

        if (process.env.NODE_ENV === 'production') {
            
            // Globals.cloudinaryPreset = "lfbvtpzc"
            // Globals.cloudinaryCloudName = "sihinspectors"
            // Globals.cloudinaryUploadLink = `https://api.cloudinary.com/v1_1/${Globals.cloudinaryCloudName}/upload`

            Globals.mainUrl = 'https://inspectur.herokuapp.com/';
            Globals.login = `${Globals.mainUrl}auth/login/`;
            Globals.getAllPersonsForUser = `${Globals.mainUrl}persons/all-persons/`;
            Globals.addLike = `${Globals.mainUrl}likes/add-like/`;
            Globals.getAllUserLikes = `${Globals.mainUrl}likes/by-user/`;
            
        } else {
            
            // Globals.cloudinaryPreset = "lfbvtpzc"
            // Globals.cloudinaryCloudName = "sihinspectors"
            // Globals.cloudinaryUploadLink = `https://api.cloudinary.com/v1_1/${Globals.cloudinaryCloudName}/upload`
            
            Globals.mainUrl = 'http://localhost:4000/';
            Globals.login = `${Globals.mainUrl}auth/login/`;
            Globals.getAllPersonsForUser = `${Globals.mainUrl}persons/all-persons/`;
            Globals.addLike = `${Globals.mainUrl}likes/add-like/`;
            Globals.getAllUserLikes = `${Globals.mainUrl}likes/by-user/`;
        }
    }

}

Globals.init()