import React, { useState } from "react";
import { useForm} from "react-hook-form"
import {yupResolver} from "@hookform/resolvers/yup"
import * as yup from "yup"
import "yup-phone";

import "./businessregistration.css";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Header from "../../../components/header/Header";
import Businessheader from "../../../components/header/Businessheader";
const BusinessRegistration = () => {

   

    const schema = yup.object().shape({
        name: yup.string().required("Name is required"),
        description: yup.string().required("Description is required"),
        email: yup.string().email().required("Email is required"),
        phone: yup.number().typeError('Phone must be a number').required("It is a required field"),
        phone1: yup.number().typeError('Phone must be a number').required("It is a required field"),
        address: yup.string().required("Address is required"),
        pincode: yup.number().typeError('Pincode must be a number').required("It is a required field"),
    })

    const {register, handleSubmit, formState: {errors},reset} = useForm({
        resolver: yupResolver(schema),
    });

    const [isSuccessfullySubmitted, setIsSuccessfullySubmitted] =useState(false);

    const onSubmit = async(data) => {
        
        console.log(data);
        const result = await(data);
        reset()
        setIsSuccessfullySubmitted(result)
    }

    const notify = () =>{
            toast.success("Registration is Successful", {
                position: "top-center",
                autoClose: 4000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: "light",
              });
        }
  return (
    <>
      <Businessheader />
      <div className="businessregistersection">
        <div className="businessregistersectionheader">
          <h2>Registration Form</h2>
        </div>
        <div className="registrationformbusiness">
          <form onSubmit={handleSubmit(onSubmit)} >
            <div className="businessformitems">
              <input
                type="text"
                id="name"
                placeholder="Name"
                {...register("name")}
              />
              <span>{errors.name?.message}</span>
            </div>
            <div className="businessformitems">
              <input
                type="text"
                id="description"
                placeholder="Description"
                {...register("description")}
              />
               <span>{errors.description?.message}</span>
            </div>
            <div className="businessformitems">
              <input
                type="text"
                id="email"
                placeholder="Email"
                {...register("email")}
              />
               <span>{errors.email?.message}</span>
            </div>
            <div className="businessformitems">
              <label htmlFor="phone">Phone</label>
              <input
                type="tel"
                id="phone"
                country="IN"
                {...register("phone")}
              />
              <span>{errors.phone?.message}</span>
              <label htmlFor="phone1">+91</label>
              <input
                type="tel"
                id="phone1"
                country="IN"
                {...register("phone1")}
              />
              <span>{errors.phone1?.message}</span>
            </div>
            <div className="businessformitems">
              <input
                type="text"
                id="address"
                placeholder="Address"
                {...register("address")}
              />
              <span>{errors.address?.message}</span>
            </div>
            <div className="businessformitems">
              <input
                type="number"
                id="pincode"
                placeholder="Pincode"
                {...register("pincode")}
              />
              <span>{errors.pincode?.message}</span>
            </div>
            <div>
              <button
                className="businesssubmitbtn"
                type="submit"
                disabled={errors.isSubmitting || isSuccessfullySubmitted}
                onClick={notify}
              >
                <span>Submit</span>
              </button>
            </div>
            {isSuccessfullySubmitted && (
           <ToastContainer
           position="top-center"
           autoClose={4000}
           hideProgressBar={false}
           newestOnTop={false}
           closeOnClick
           rtl={false}
           pauseOnFocusLoss
           draggable
           pauseOnHover
           theme="light"
         />
        )}
          </form>
        </div>
      </div>
     
    </>
  );
};

export default BusinessRegistration;
