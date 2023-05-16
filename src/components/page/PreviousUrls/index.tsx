import {
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Typography,
} from "@mui/material";
import { StyledContainer } from "@src/components/common/AlertCard/styles";
import FlexContainer from "@src/components/common/FlexContainer";
import { ResponseURL } from "@src/types/FormFields";
import React from "react";

interface PreviousUrlProps {
  previousUrls: ResponseURL[];
}

const PreviousUrls: React.FC<PreviousUrlProps> = ({ previousUrls }) => {
  return (
    <TableContainer>
      <Table sx={{ width: 500, margin: "auto" }} aria-label="simple table">
        {previousUrls.length > 0 ? (
          <TableHead>
            <TableRow>
              <TableCell>
                <Typography variant="h6" fontWeight={600}>
                  Original URLs:
                </Typography>
              </TableCell>
              <TableCell>
                <Typography variant="h6" fontWeight={600}>
                  Shortened URLs:
                </Typography>
              </TableCell>
            </TableRow>
          </TableHead>
        ) : null}

        <TableBody>
          {previousUrls.map((urls, index) => (
            <TableRow key={index}>
              <TableCell>
                <Typography variant="body1">{urls.urlLong}</Typography>
              </TableCell>
              <TableCell>
                <Typography variant="body1">{urls.urlShort}</Typography>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
};

export default PreviousUrls;
