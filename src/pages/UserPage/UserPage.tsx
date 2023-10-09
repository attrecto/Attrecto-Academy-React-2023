import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { UserFormValues, UserModel } from "../../models/user.model";
import { usersService } from "../../services/user.service";
import { useForm, Controller } from "react-hook-form";
import * as Yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import Page from "../../components/Page/Page";
import TextField from "../../components/text-field/TextField";
import TagField from "../../components/tag-field/TagField";
import { BadgeModel } from "../../models/badges.model";
import { badgeService } from "../../services/badges.service";

const schema = Yup.object({
  name: Yup.string().required(),
  image: Yup.string().required(),
  badges: Yup.array().required(),
}).required();

const UserPage = () => {
  const { id } = useParams<{ id: string }>();
  const [user, setUser] = useState<UserModel>();
  const [badges, setBadges] = useState<BadgeModel[]>([]);
  const {
    register,
    control,
    handleSubmit,
    reset,
    setValue,
    getValues,
    formState: { errors },
  } = useForm<UserFormValues>({
    defaultValues: {
      name: "",
      image: "",
      badges: [],
    },
    resolver: yupResolver(schema),
  });

  useEffect(() => {
    const fetchUser = async (id: string) => {
      setUser(await usersService.getUser(id));
    };
    if (id) {
      fetchUser(id);
    }
  }, [id]);

  useEffect(() => {
    const fetchBadges = async () => {
      setBadges(await badgeService.getBadges());
    };
    fetchBadges();
  }, []);

  useEffect(() => {
    reset({ name: user?.name, image: user?.image, badges: user?.badges || [] });
  }, [reset, user?.badges, user?.image, user?.name]);

  console.log(user);

  return (
    <Page title={user ? user.name : "User"}>
      <form>
        <TextField
          name="name"
          label="Name"
          register={register}
          error={errors.name?.message}
        />
        <TextField
          name="image"
          label="Avatar url"
          register={register}
          error={errors.image?.message}
        />
        <Controller
          name="badges"
          control={control}
          render={({ field }) => (
            <TagField
              {...field}
              name="badges"
              label="Badges"
              getLabel={({ name }) => name}
              setValue={setValue}
              getValues={getValues}
              options={badges}
            />
          )}
        />
      </form>
    </Page>
  );
};

export default UserPage;
