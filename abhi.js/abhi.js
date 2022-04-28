import React, { useState, useEffect, useRef } from "react";
import Box from "@mui/material/Box";
import TextareaAutosize from "@mui/material/TextareaAutosize";
import Typography from "@mui/material/Typography";
import Stack from "@mui/material/Stack";
import Button from "@mui/material/Button";
import Grid from "@mui/material/Grid";
import "fontsource-roboto";
import "./Client.css";
import ClientNotesDetail from "./ClientNotes.js";

const ClientNotesForm = () => {
  const [clientNotesDetail, setClientNotesDetail] = useState(false);
  return (
    <>
      {clientNotesDetail ? (
        <ClientNotesDetail />
      ) : (
        <div>
          <Stack
            spacing={{ xs: 1, iphone: 2 }}
            className="px-3"
          >
            <Grid className="edit_info_spacing" container spacing={3}>
              <Grid item lg={12} md={12} sm={12} xs={12}>
                <div className="client_form_wrapper">
                  dsssddd
                  <div className="client_notes_btn mb-6">
                    <h5>Write Notes About Me and my girlfriend</h5>
                  </div>
                  <p>hello My name is Montu and i am from indore</p>
                  <Typography className="w-2/4 p-0 inline edit_notes_fiels">
                    <label className="leading-5 text-lg text-gray-500"></label>
                    <TextareaAutosize
                    adsadsads
                      className="w-full border-1 border-blue-100 opacity-100 text-gray-900"
                      id="editNotes"
                      name="editNotes"
                      minRows={2}
                      type="text"
                    />
                  </Typography>
                </div>
              </Grid>
            </Grid>
            <Box className="flex justify-end">
              sasdds
              
              <Button
                className="h-14 Client_btn text-white w-10 px-3 bg-clientBlue ml-4"
                type="submit"
                sx={{
                  fontWeight: 600,
                  fontSize: { xs: "1rem", iphone: "1.125rem" },
                  lineHeight: { xs: "1.5rem", iphone: "1.75rem" },
                }}
              >
                Save
              </Button>
            </Box>
          </Stack>
        </div>
      )}
    </>
  );
};

export default ClientNotesForm;
