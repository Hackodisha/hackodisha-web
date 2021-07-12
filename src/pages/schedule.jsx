import React from "react";
import styled from "styled-components";
import Raisebox from "../components/raisebox/raisebox";
import { withStyles, makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';

const StyledTableCell = withStyles((theme) => ({
  head: {
    backgroundColor: theme.palette.common.black,
    color: theme.palette.common.white,
  },
  body: {
    fontSize: 14,
  },
}))(TableCell);

const StyledTableRow = withStyles((theme) => ({
  root: {
    '&:nth-of-type(odd)': {
      backgroundColor: theme.palette.action.hover,
    },
  },
}))(TableRow);

function createData(Time, Description) {
  return { Time, Description };
}

const rows = [
  createData('9:00 - 10:00', "Introductory session"),
  createData('9:00 - 10:00', "Introductory session"),
  createData('9:00 - 10:00', "Introductory session"),
  createData('9:00 - 10:00', "Introductory session"),
  createData('9:00 - 10:00', "Introductory session"),
];

const ScheduleContainer = styled.div`
  height: 100%;
  width: 100%;
  align-items: center;
  justify-content: center;
  display: flex;
`;

const Scheduleh1 = styled.h1`
  font-weight: 900;
  color: #fff;
  font-size: 6rem;
  line-height: 0.8em;
  letter-spacing: -0.07em;

  @media screen and (max-width: 576px){
    font-size: 3.2rem;
  }
`;

const Scheduleh2 = styled.h2`
  text-align: center;
  color: #fff;
  font-size: 2.5rem;

  @media screen and (max-width: 576px){
    font-size: 2rem;
  }
`;

function Schedule() {

  return (
    <Raisebox>
      <ScheduleContainer>
        <Scheduleh1>
          HACKATHON <span style={{ color: "#ff0000" }}> SCHEDULE</span>
        </Scheduleh1>{" "}
      </ScheduleContainer>
      <TableContainer component={Paper} style={{ width: "60vw", marginLeft: "18%", marginTop: "-2%"}}>
        <Table>
          <TableHead>
            <TableRow>
              <StyledTableCell>Time</StyledTableCell>
              <StyledTableCell>Description</StyledTableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {rows.map((row) => (
              <StyledTableRow key={row.Time}>
                <StyledTableCell component="th" scope="row">
                  {row.Time}
                </StyledTableCell>
                <StyledTableCell>{row.Description}</StyledTableCell>
              </StyledTableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
      <p style={{ color: "#18191a"}}>Table</p>
    </Raisebox>
  );
}

export default Schedule;
