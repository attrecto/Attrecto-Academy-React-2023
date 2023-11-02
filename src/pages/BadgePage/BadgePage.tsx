import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { useForm } from "react-hook-form";
import * as Yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import Page from "../../components/Page/Page";
import TextField from "../../components/text-field/TextField";
import { Badge, BadgeModel } from "../../model/badges.model";
import { badgesService } from "../../services/badges.service";
import Button from "../../components/Button/Button";

const schema = Yup.object({
  name: Yup.string().required(),
  image: Yup.string().required(),
  description: Yup.string().required(),
}).required();

const BadgePage = () => 
{
  const { id } = useParams<{ id: string }>();
  const [badge, setBadge] = useState<BadgeModel>();
  const navigate = useNavigate();
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<Badge>({
    defaultValues: 
    {
      name: "",
      image: "",
      description: "",
    },
    resolver: yupResolver(schema),
  });

  useEffect(() => 
  {
    const fetchBadge = async (id: string) => 
    {
      setBadge(await badgesService.getBadge(id));
    };
    if (id) 
    {
      fetchBadge(id);
    }
  }, [id]);


  useEffect(() => 
  {
    reset({ name: badge?.name, image: badge?.image, description: badge?.description});
  }, [reset, badge?.name, badge?.image, badge?.description]);

  
  const onSubmit = async (values: Badge) =>
  {
    if(badge?.id)
    {
      await badgesService.updateBadge(badge.id.toString(), values)
    }
    else
    {
      await badgesService.createBadge(values)
    }
    gotoBadgesPage();
  }

    const gotoBadgesPage = () => 
    {
      navigate("/badges")
    }

  return (
    <Page title={badge ? badge.name : "Badge"}>
      <form onSubmit={handleSubmit(onSubmit)}>
        <TextField
          name="name"
          label="Name"
          register={register}
          error={errors.name?.message}
        />
        <TextField
          name="image"
          label="Badge url"
          register={register}
          error={errors.image?.message}
        />
        <TextField
          name="description"
          label="Description"
          register={register}
          error={errors.description?.message}
        />

        <div className="mt-3">
          <Button color="secondary" type="button" className="me-2" onClick={gotoBadgesPage}>Back</Button>
          <Button type="submit">{id ? "Update" : "Create"}</Button>

        </div>
      </form>
    </Page>
  );
};

export default BadgePage;
