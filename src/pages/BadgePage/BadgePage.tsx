import React, { useEffect, useState } from 'react';
import Page from '../../components/Page/Page';
import Button from '../../components/Button/Button';
import TextField from "../../components/text-field/TextField";
import { BadgeFormValues, BadgeModel } from "../../models/badges.model";
import { badgeService } from "../../services/badges.service";
import * as Yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { useNavigate, useParams } from 'react-router-dom';
import { useForm } from 'react-hook-form';

const schema = Yup.object({
    name: Yup.string().required(),
    image: Yup.string().required(),
    description: Yup.string().required(),
  }).required();


const BadgePage = () => {
    const { id }=useParams<{ id: string}>();
    const [badge,setBadge]=useState<BadgeModel>();
    const navigate=useNavigate();

    const {
        register,
        handleSubmit,
        reset,
        formState: { errors },
    }= useForm<BadgeFormValues>({
        defaultValues:{
            name: "",
            image: "",
            description: "",
        },
        resolver: yupResolver(schema),
    });

    useEffect(()=>{
        const fetchBadge=async(id: string)=>{
            setBadge(await badgeService.getBadge(id));
        };
        if(id)
        {
            fetchBadge(id)
        }
    },[id]);

    useEffect(()=>{
        reset({name: badge?.name, image: badge?.image, description: badge?.description})
    }, [reset, badge?.name, badge?.image,badge?.description ]);

    const onSubmit=async(values: BadgeFormValues)=>{
        if(badge?.id)
        {
            await badgeService.updateBadge(badge.id.toString(),values);
        }
        else
        {
            await badgeService.createBadge(values);
        }
        goToBadgesPage();
    };

    const goToBadgesPage=()=>{
        navigate("/badges");
    };
    
    

  return (
    <Page title={badge ? badge.name : "Badge"}>
        <form onSubmit={handleSubmit(onSubmit)}>
            <TextField name="name" label="Name" register={register} error={errors.name?.message} />
            <TextField name="image" label="Badge image url" register={register} error={errors.name?.message} />
            <TextField name="description" label="Description" register={register} error={errors.name?.message} />
            <div className='mt-3'>
                <Button color='secondary' type='button' className='me-2' onClick={goToBadgesPage}>
                    Back
                </Button>
                <Button type='submit'>{id ? "Update" : "Create"}</Button>
            </div>
            
        </form>
    </Page>
  );
};

export default BadgePage
