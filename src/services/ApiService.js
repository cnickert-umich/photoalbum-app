import $ from '../../node_modules/jquery/dist/jquery';

const BASE_URL = "https://u-of-m-album.herokuapp.com";

class ApiService {

    constructor() { }


    createAlbum(albumName) {
        return $.ajax({
            url: BASE_URL + "/album",
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
                'Authorization': "Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzUxMiJ9.eyJzdWIiOiJidmVzZWwiLCJleHAiOjE1NzcwNTg3Njd9.-ZjQuiF3nzGIrnS2Nr_f5MbE-6BF_7YUwrUHKPDYQ8OxvkTGYJUd8u83xtZj2E113VWAxR7l_8rpxbZNTCx38A"
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
                'Authorization': "Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzUxMiJ9.eyJzdWIiOiJidmVzZWwiLCJleHAiOjE1NzcwNTg3Njd9.-ZjQuiF3nzGIrnS2Nr_f5MbE-6BF_7YUwrUHKPDYQ8OxvkTGYJUd8u83xtZj2E113VWAxR7l_8rpxbZNTCx38A"
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
                'Authorization': "Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzUxMiJ9.eyJzdWIiOiJidmVzZWwiLCJleHAiOjE1NzcwNTg3Njd9.-ZjQuiF3nzGIrnS2Nr_f5MbE-6BF_7YUwrUHKPDYQ8OxvkTGYJUd8u83xtZj2E113VWAxR7l_8rpxbZNTCx38A"
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
                'Authorization': "Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzUxMiJ9.eyJzdWIiOiJidmVzZWwiLCJleHAiOjE1NzcwNTg3Njd9.-ZjQuiF3nzGIrnS2Nr_f5MbE-6BF_7YUwrUHKPDYQ8OxvkTGYJUd8u83xtZj2E113VWAxR7l_8rpxbZNTCx38A",
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