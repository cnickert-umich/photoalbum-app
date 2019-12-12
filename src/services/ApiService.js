import $ from '../../node_modules/jquery/dist/jquery';

const BASE_URL = "https://u-of-m-album.herokuapp.com";

class ApiService {

    constructor() { }


    createAlbum() {

    }

    updateAlbum() {

    }

    getAllAlbums() {
        return $.ajax({
            url: BASE_URL + "/album",
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
                'Authorization': "Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzUxMiJ9.eyJzdWIiOiJidmVzZWwiLCJleHAiOjE1NzY5OTQwMDV9.cR9Yfep4iWdrMRHzY6HWbc3F7Iz9L9BjzGwVaAI2sClS5PAgoN2BT_LuAuukDYDalL1G_Rk5UP2BrY3WK_STOw"
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
                'Authorization': "Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzUxMiJ9.eyJzdWIiOiJidmVzZWwiLCJleHAiOjE1NzY5OTQwMDV9.cR9Yfep4iWdrMRHzY6HWbc3F7Iz9L9BjzGwVaAI2sClS5PAgoN2BT_LuAuukDYDalL1G_Rk5UP2BrY3WK_STOw"
            },
            dataType: 'json',
            method: 'GET'
        });
    }

    uploadPhoto() {

    }


}

export default new ApiService();