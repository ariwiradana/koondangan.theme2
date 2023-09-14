import React, { useState } from "react";
import Image from "next/image";
import { Button } from "@/components/elements/button";
import useAdmin from "@/hooks/useAdmin";
import moment from "moment";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import { estimateFileSize } from "@/utils/estimate.filesize";
import FormDialog from "@/components/elements/form.dialog";
import { LuImagePlus } from "react-icons/lu";
import { FiLoader } from "react-icons/fi";

const selectOptions = [
  { value: "cover", label: "Cover" },
  { value: "thumbnail", label: "Thumbnail" },
  { value: "person", label: "Person" },
  { value: "gallery", label: "Gallery" },
];

const YourPage = () => {
  const { data, handler, state } = useAdmin(process.env.NEXT_PUBLIC_USER);

  return (
    <>
      <FormDialog
        title="Add Images"
        open={state.openDialog}
        onClose={handler.handleToggleDialog}
      >
        <form onSubmit={handler.handleSubmitAdd}>
          <div mb={2}>
            <FormControl
              fullWidth
              sx={{ m: 1, minWidth: 120 }}
              size="small"
              className="flex flex-col gap-y-4"
            >
              <InputLabel id="add-type">Type</InputLabel>
              <Select
                labelId="add-type"
                id="demo-select-small"
                value={state.form.imgType}
                label="Type"
                onChange={(e) =>
                  handler.handleChange(e.target.value, "add", "imgType")
                }
              >
                {selectOptions?.map((option) => (
                  <MenuItem key={option.value} value={option.value}>
                    {option.label}
                  </MenuItem>
                ))}
              </Select>
              <div>
                <input
                  onChange={(e) =>
                    handler.handleChange(e.target.files, "add", "files")
                  }
                  type="file"
                  accept="image/*"
                />
              </div>
            </FormControl>
            <div className="flex justify-end">
              <Button
                loading={state.addLoading}
                size="medium"
                title="Add"
                variant="primary"
              />
            </div>
          </div>
        </form>
      </FormDialog>
      <div>
        <div className="flex h-[150px] lg:h-auto lg:px-12 lg:pt-12 lg:pb-0 p-5 z-40 inset-x-0 w-full bg-white fixed lg:relative top-0 items-center mb-8 flex-wrap gap-x-2 gap-y-3">
          <h1 className="text-3xl font-semibold font-poppins min-w-[80vw] lg:min-w-0">
            Images
          </h1>
          <FormControl sx={{ m: 1, minWidth: 120 }} size="small">
            <InputLabel id="demo-select-small-label">Type</InputLabel>
            <Select
              labelId="demo-select-small-label"
              id="demo-select-small"
              value={state.imgType}
              label="Type"
              onChange={(e) => handler.handleChange(e.target.value)}
            >
              {selectOptions?.map((option) => (
                <MenuItem key={option.value} value={option.value}>
                  {option.label}
                </MenuItem>
              ))}
            </Select>
          </FormControl>
          <Button
            onClick={() => handler.handleToggleDialog()}
            icon={<LuImagePlus size={18} />}
            variant="primary"
            title="Add Images"
            size="medium"
          />
        </div>

        {state.isLoading ? (
          <div className="flex justify-center mt-[150px] lg:mt-0">
            <FiLoader
              size={18}
              style={{ animationDuration: "3s" }}
              className="animate-spin text-gray-500"
            />
          </div>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-4 mt-[150px] lg:mt-0 py-6 px-5 lg:px-12">
            {data?.images?.map((card) => (
              <div
                key={card.id}
                className="bg-white rounded-lg shadow-md p-4 flex flex-col justify-between"
              >
                <div className="relative h-48">
                  <Image
                    quality={50}
                    src={card.url}
                    alt={card._id}
                    fill
                    priority
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    className="rounded-lg object-cover object-center"
                  />
                </div>
                <div className="my-3 flex flex-col gap-y-1 overflow-hidden">
                  <h2 className="text-xl font-semibold">
                    {card.original_filename}
                  </h2>
                  <p className="text-gray-500 text-sm">
                    Date: {moment(card?.created_at).format("DD MMM yyyy")}
                  </p>
                  <p className="text-gray-500 text-sm">
                    Type: {card?.filetype}
                  </p>
                  <p className="text-gray-500 text-sm">
                    Size: {estimateFileSize(Number(card?.size))}
                  </p>
                </div>
                <Button
                  loading={state.deleteLoading == card?.filename}
                  size="medium"
                  onClick={() => handler.handleDeleteCard(card.filename)}
                  title="Delete"
                  variant="primary"
                />
              </div>
            ))}
          </div>
        )}
      </div>
    </>
  );
};

export default YourPage;
