import React, { useState, useRef } from "react";
import Header from "./Header";
import { checkValidData } from "../Utils/Validate";
import { createUserWithEmailAndPassword, signInWithEmailAndPassword, updateProfile, } from "firebase/auth";
import { auth } from "../Utils/Firebase";
import { useNavigate } from "react-router-dom";
import { addUser } from "../Utils/userSlice";
import { useDispatch } from "react-redux";

const Login = () => {
    const [isLogin, setisLogin] = useState(true);
    const [errorMessage, setErrorMessage] = useState(null);
    const dispatch = useDispatch();



    const handleLogin = () => {
        setisLogin(!isLogin);
    };

    // regesx auth
    const name = useRef(null);
    const email = useRef(null);
    const password = useRef(null);

    const handleButtonClick = () => {


        if (email.current && password.current) {
            // Extract email and password values
            const emailValue = email.current.value;
            const passwordValue = password.current.value;
        
            // Validate email and password
            const message = checkValidData(emailValue, passwordValue);
            // Set error message if validation fails
            setErrorMessage(message);
        
            // If validation message exists, stop execution
            if (message) return;
        
            let action;
            if (!isLogin) {
                // If signing up, create a new user with email and password
                action = createUserWithEmailAndPassword(
                    auth,
                    emailValue,
                    passwordValue
                ).then((userCredential) => {
                    // After user is created, update their profile
                    const user = userCredential.user;
        
                    return updateProfile(user, {
                        displayName: name.current.value,
                        photoURL: "https://example.com/jane-q-user/profile.jpg"
                    }).then(() => {
                        // Dispatch addUser action to add user data to Redux store
                        const { uid, displayName, email } = auth.currentUser;
                        dispatch(addUser({ uid: uid, displayName: displayName, email: email }));
                    });
                });
            } else {
                // If logging in, sign in existing user with email and password
                action = signInWithEmailAndPassword(auth, emailValue, passwordValue);
            }
        
            action.catch((error) => {
                // If an error occurs during login/signup, set error message
                const errorCode = error.code;
                const errorMessage = error.message;
                setErrorMessage(errorCode + "-" + errorMessage);
            });
        }
        





        // if (email.current && password.current) {

        //     const message = checkValidData(email.current.value, password.current.value);
        //     setErrorMessage(message);

        //     if (message) return;

        //     if (!isLogin) {
        //         // Create new user with email and password
        //         createUserWithEmailAndPassword(
        //             auth,
        //             email.current.value,
        //             password.current.value
        //         )
        //             .then((userCredential) => {
        //                 const user = userCredential.user;
        //                 console.log(name.current.value)
        //                 updateProfile(user, {
        //                     displayName: name.current.value,
        //                     photoURL: "https://example.com/jane-q-user/profile.jpg"
        //                 }).then(() => {
        //                     // Profile updated!
        //                     const { uid, displayName, email } = auth.currentUser;

        //                     // Dispatch addUser action to add user data to Redux store
        //                     dispatch(addUser({ uid: uid, displayName: displayName, email: email }))

        //                 }).catch((error) => {
        //                     // An error occurred

        //                 });
        //                 // Signed in

        //             })
        //             .catch((error) => {
        //                 const errorCode = error.code;
        //                 const errorMessage = error.message;
        //                 setErrorMessage(errorCode + "-" + errorMessage)
        //             });
        //     } else {
        //         // Sign in existing user with email and password
        //         signInWithEmailAndPassword(auth, email.current.value, password.current.value)
        //             .then((userCredential) => {
        //                 // Signed in 
        //                 const user = userCredential.user;

        //             })
        //             .catch((error) => {
        //                 const errorCode = error.code;
        //                 const errorMessage = error.message;
        //                 setErrorMessage(errorMessage)
        //             });
        //     }
        // }
    };


    return (
        <div className="relative  min-h-screen flex flex-col from-black">
            <Header />

            <div className="absolute w-full h-full ">
                <img
                    src="https://assets.nflxext.com/ffe/siteui/vlv3/f85718e8-fc6d-4954-bca0-f5eaf78e0842/ea44b42b-ba19-4f35-ad27-45090e34a897/IN-en-20230918-popsignuptwoweeks-perspective_alpha_website_large.jpg"
                    alt="" className="object-cover w-full h-full"
                />
            </div>

            {/* form */}
            <div className="relative z-10 flex items-center justify-center m-auto  bg-black bg-opacity-80 mt-20 max-w-2/3">
                <form
                    onSubmit={(e) => e.preventDefault()}
                    className="flex flex-col gap-9 text-gray-400 py-20 w-full mx-12"
                >
                    <h1 className="text-4xl text-white">
                        {isLogin ? "Sign In" : "sign Up"}
                    </h1>
                    <div className="flex gap-4 flex-col w-80">
                        {isLogin ? (
                            ""
                        ) : (
                            <input ref={name}
                                type="text"
                                placeholder="Full Name"
                                className="p-4 bg-gray-800 rounded-md outline-none"
                            />
                        )}
                        <input
                            ref={email}
                            type="email"
                            placeholder="Email or phone number"
                            className="p-4 bg-gray-800 rounded-md outline-none"
                        />
                        <input
                            ref={password}
                            type="password"
                            placeholder="Password"
                            className="p-4 bg-gray-800 rounded-md outline-none"
                        />
                    </div>

                    <p className="text-red-500 font-bold text-lg py-2">{errorMessage}</p>
                    <button
                        className="bg-red-600 text-white p-3 rounded-md"
                        onClick={handleButtonClick}
                    >
                        {isLogin ? "Sign In" : "sign Up"}
                    </button>

                    <div className="flex flex-row justify-between">
                        <div className="flex flex-row gap-2">
                            <input type="checkbox" />
                            <label for="checkbox">Remember me</label>
                        </div>
                        <p>Need help?</p>
                    </div>
                    <p>
                        {isLogin ? " New to Netflix? " : "Already Registerd ? "}
                        <span className="text-white cursor-pointer" onClick={handleLogin}>
                            {isLogin ? "Sign up now" : "sign In"} .
                        </span>
                    </p>
                </form>
            </div>
        </div>
    );
};

export default Login;
