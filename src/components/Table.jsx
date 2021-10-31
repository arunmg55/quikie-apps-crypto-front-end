import React, { useState, useEffect } from "react";
import styled, { keyframes } from "styled-components";
import { COLORS } from "theme";
import Flex from "components/Flex";
import Button from "components/Button";
import Symbol from "components/Symbol";
import { formatCurrency } from "utils/formatCurrency";

const TableWrapper = styled.div`
  border: 1px solid ${COLORS.WHITE_02};
  border-radius: 5px;
  box-shadow: 0px -1px 4px ${COLORS.WHITE_05};
  position: relative;
  transition: 0.3s all;
  &:hover {
    box-shadow: 0px 1px 15px ${COLORS.WHITE_05};
  }
`;

const StyledTable = styled.div`
  overflow-x: auto;
  position: relative;
  min-height: 20rem;
`;

const CustomTable = styled.table`
  width: 100%;
  border: 1px solid ${COLORS.WHITE_02};
  padding-bottom: 3rem;
`;

const TR = styled.tr`
  background-color: ${COLORS.WHITE_03};
  height: 2rem;
  color: ${COLORS.TEXT_PRIMARY};
  font-size: 0.65rem;
`;

const Row = styled.tr`
  text-align: center;
  font-size: 0.7rem;
`;

const TableCell = styled.td`
  border-bottom: 1px solid ${COLORS.WHITE_02};
  padding: 0.6rem;
  word-break: break-word;
  width: 10rem;
`;

const Caption = styled(Flex)`
  text-align: left;
  padding: 0.8rem 2rem;
  font-size: 0.8rem;
`;

const InputWrapper = styled(Flex)`
  margin-left: 4rem;
  width: 18rem;
  height: 1.75rem;
  background-color: ${COLORS.WHITE_03};
  color: ${COLORS.TEXT_PRIMARY};
  padding: 0 0.7rem;
  border-radius: 0.2rem;
`;

const Input = styled.input`
  width: 100%;
  height: 100%;
  background: inherit;
  outline: none;
  border: none;
  color: inherit;
  padding-left: 0.4rem;
  font-size: 0.7rem;
`;

const TableFooter = styled(Flex)`
  margin-top: 1rem;
  background-color: ${COLORS.WHITE_03};
  height: 2rem;
  position: absolute;
  width: 100%;
  bottom: 0;
`;

const Icon = styled.span`
  font-size: 0.5rem;
`;

const ButtonIcon = styled.button`
  padding: 0;
  outline: none;
  width: 1.2rem;
  height: 1.2rem;
  border-radius: 50%;
  border: none;
  transition: 0.35s all;
  margin-left: 1.2rem;
  cursor: pointer;
  &:hover {
    box-shadow: 1px 2px 10px #c1bebe;
  }
  &:disabled {
    cursor: not-allowed;
    box-shadow: none;
  }
`;
const OverLayWrapper = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  color: #35496b;
  pointer-events: none;
  background-color: #93939357;
  z-index: 4;
`;

const Text = styled.div`
  color: #25213b;
  text-align: ${({ end }) => (end ? "end" : "unset")};
  width: ${({ end }) => (end ? "80%" : "unset")};
`;

const SubText = styled.div`
  color: #6e6893;
  margin-left: 6%;
  font-size: 0.64rem;
`;

const Pagination = styled(Flex)`
  color: #6e6893;
  font-size: 0.6rem;
  margin-right: 1rem;
`;

const NoData = styled(TableCell)`
  text-align: center;
  height: 17rem;
`;

const fadeIn = keyframes`
from {
  transform: rotate(0deg);
}
to {
  transform: rotate(360deg);
}`;

const RefreshIcon = styled.span`
  font-size: 2rem;
  animation: ${fadeIn} infinite 1s linear;
`;

const Table = ({
  savedData = [],
  data = [],
  type = "",
  tableTitle = "",
  onSave = undefined,
  onDelete = undefined,
  loading = false,
  total = undefined,
  page = 1,
  loadStockDetails = undefined,
}) => {
  const [tableData, setTableData] = useState([]);

  useEffect(() => {
    setTableData(data);
  }, [data]);

  const getButton = (eachInfo) => {
    const company = savedData.find(
      (each) =>
        each?.symbol === eachInfo?.symbol && each?.name === eachInfo?.name
    );
    if (company) {
      return (
        <Button type="link" to="/view">
          VIEW
        </Button>
      );
    } else {
      return (
        <Button
          color={COLORS.BLUE_03}
          onClick={() => (onSave && onSave(eachInfo)) || undefined}
          normal
        >
          SAVE DATA
        </Button>
      );
    }
  };
  const previousHandler = () => {
    const prevPage = page - 1;
    if (loadStockDetails) loadStockDetails(prevPage);
  };

  const nextHandler = () => {
    const nextPage = page + 1;
    if (loadStockDetails) loadStockDetails(nextPage);
  };

  return (
    <TableWrapper>
      {type !== "view" && (
        <Caption centerVertically>
          Cryptocurrency Details Table
          {/* <InputWrapper centerVertically>
            <span className="material-icons">search</span>
            <Input type="search" placeholder="Search by Company Name" />
          </InputWrapper> */}
        </Caption>
      )}
      <StyledTable>
        {loading && (
          <OverLayWrapper>
            <RefreshIcon className="material-icons">autorenew</RefreshIcon>
          </OverLayWrapper>
        )}
        <CustomTable cellSpacing="0">
          <thead>
            {type === "view" ? (
              <TR>
                <th></th>
                <th></th>
                <th>{tableTitle}</th>
                <th></th>
                <th></th>
              </TR>
            ) : (
              <TR>
                <th>NAME </th>
                <th>SYMBOL </th>
                <th>MARKET CAP </th>
                <th> </th>
                <th>CURRENT PRICE </th>
              </TR>
            )}
          </thead>
          <tbody>
            {tableData.length > 0
              ? tableData?.map((eachData) => (
                  <Row>
                    <TableCell>
                      <Text>{eachData?.name}</Text>
                    </TableCell>
                    <TableCell>
                      <Symbol name={eachData?.symbol} />
                    </TableCell>
                    <TableCell>
                      <SubText>{`$${formatCurrency(
                        Number(eachData?.market_cap)
                      )}`}</SubText>
                    </TableCell>
                    <TableCell>
                      {type === "view" ? (
                        <Button
                          onClick={() =>
                            (onDelete && onDelete(eachData)) || undefined
                          }
                        >
                          DELETE
                        </Button>
                      ) : (
                        getButton(eachData)
                      )}
                    </TableCell>
                    <TableCell>
                      <Text end>
                        {`$ ${formatCurrency(Number(eachData?.price))}`}
                        <SubText>USD</SubText>
                      </Text>
                    </TableCell>
                  </Row>
                ))
              : !loading && (
                  <Row>
                    <TableCell></TableCell>
                    <TableCell></TableCell>
                    <NoData>
                      <span className="material-icons">cloud_off</span>
                      <Text>NO DATA</Text>
                    </NoData>
                    <TableCell></TableCell>
                    <TableCell></TableCell>
                  </Row>
                )}
          </tbody>
        </CustomTable>
        <TableFooter centerVertically end>
          {type === "view" ? (
            <Button type="link">BACK</Button>
          ) : (
            <Pagination centerVertically>
              {`${page * 5 - 4} - ${page * 5}  of ${total || data.length}`}
              <span>
                <ButtonIcon
                  disabled={page <= 1}
                  onClick={previousHandler}
                  title="Previous"
                >
                  <Icon className="material-icons">arrow_back_ios</Icon>
                </ButtonIcon>
                <ButtonIcon
                  onClick={nextHandler}
                  disabled={!(page * 5 < total || data.length)}
                  title="Next"
                >
                  <Icon className="material-icons">arrow_forward_ios</Icon>
                </ButtonIcon>
              </span>
            </Pagination>
          )}
        </TableFooter>
      </StyledTable>
    </TableWrapper>
  );
};

export default Table;
