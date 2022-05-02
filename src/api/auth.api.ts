import axiosMain from "axios";
import axios from "config/axios.instance";
import { TUser } from "types/user.types";
import { TLoginResponse, TSignupResponse } from "./types";

export const login = async (username: string, password: string) => {
    const response: TLoginResponse = {
        access: "asdh29873yrfdUGASF*&TAFYGS*DYF97psdtgFYg",
        refresh: "hSUIYD(&WTISGF98AYERFIUG*D(F9iywe98g9df",
    };

    const accessToken = response.access;
    const refreshToken = response.refresh;

    localStorage.setItem("AUTH_ACCESS_TOKEN", accessToken);
    localStorage.setItem("AUTH_REFRESH_TOKEN", refreshToken);
};

export const signup = async (email: string, username: string, password: string) => {
    const response: TSignupResponse = {
        access: "asdh29873yrfdUGASF*&TAFYGS*DYF97psdtgFYg",
        refresh: "hSUIYD(&WTISGF98AYERFIUG*D(F9iywe98g9df",
    };
};

export const refreshToken = async () => {
    // Use refresh token if it exists, to update both refresh and access token.
    const oldRefreshToken = localStorage.getItem("AUTH_REFRESH_TOKEN");

    // Update access and refresh token by old refresh token, if it exists.
    if (oldRefreshToken) {
        const newToken = await axios.post("/auth/jwt/refresh/", {
            refresh: oldRefreshToken,
        });

        // refresh token worked and user fetched

        const accessToken = newToken.data.access;
        const refreshToken = newToken.data.refresh;

        // Set fetched new tokens to local storage.
        localStorage.removeItem("AUTH_ACCESS_TOKEN");
        localStorage.removeItem("AUTH_REFRESH_TOKEN");
        localStorage.setItem("AUTH_ACCESS_TOKEN", accessToken);
        localStorage.setItem("AUTH_REFRESH_TOKEN", refreshToken);

        // Again, checking the user to login.
        const response = await axios.get("/myinfo/");
        return response.data;
    } else {
        // access token is not exist and we are throwing an error
        throw new Error("refresh_token_not_found");
    }
};

export const check = async () => {
    const accessToken = localStorage.getItem("AUTH_ACCESS_TOKEN");

    try {
        if (accessToken) {
            // Get user from server if access token is exists.
            const user: TUser = {
                id: "ahfigiuasfg982y3",
                username: "Mohammad",
            };
            // access token worked and user fetched
            return user;
        } else {
            // access token is not exist and we are going to try refresh
            return await refreshToken();
        }
    } catch (error) {
        // If an error from access token,
        // then refreshToken() function is going to run to refreshing the tokens.
        if (axiosMain.isAxiosError(error)) {
            if (error.response?.data.messages[0].token_type === "access") {
                // the error from access token
                return refreshToken()
                    .then((user) => user)
                    .catch((error) => {
                        // all tokens are not valid
                        localStorage.removeItem("AUTH_ACCESS_TOKEN");
                        localStorage.removeItem("AUTH_REFRESH_TOKEN");
                        return undefined;
                    });
            }
        } else {
            // the error from other reason
            localStorage.removeItem("AUTH_ACCESS_TOKEN");
            localStorage.removeItem("AUTH_REFRESH_TOKEN");
            throw error;
        }
    }
};
