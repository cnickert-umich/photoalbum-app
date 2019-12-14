import $ from '../../node_modules/jquery/dist/jquery';
import LoginSerivce from './LoginService';

const BASE_URL = "https://u-of-m-album.herokuapp.com";

class ApiService {

    constructor() { }

    getPhotoUrl(photoId) {
        return BASE_URL + "/photo/" + photoId;
    }

    createAlbum(albumName) {
        return $.ajax({
            url: BASE_URL + "/album",
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
                'Authorization': LoginSerivce.getAuthToken()
            },
            dataType: 'json',
            method: 'POST',
            data: JSON.stringify({
                "name": albumName
            })
        });
    }

    updateAlbum() {

    }

    getAllAlbums() {
        return $.ajax({
            url: BASE_URL + "/album",
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
                'Authorization': LoginSerivce.getAuthToken()
            },
            dataType: 'json',
            method: 'GET'

        });
    }

    getPhotos(albumId) {
        return $.ajax({
            url: BASE_URL + "/album/" + albumId + "/photo",
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
                'Authorization': LoginSerivce.getAuthToken()
            },
            dataType: 'json',
            method: 'GET'
        });
    }

    uploadPhoto(albumId, imageFile) {
        let form_data = new FormData();
        form_data.append("file", imageFile);
        return $.ajax({
            url: BASE_URL + "/album/" + albumId + "/photo",
            headers: {
                'Authorization': LoginSerivce.getAuthToken(),
                "Accept": "application/json"
            },
            cache: false,
            contentType: false,
            processData: false,
            async: false,
            method: 'POST',
            data: form_data
        });
    }


}

export default new ApiService();