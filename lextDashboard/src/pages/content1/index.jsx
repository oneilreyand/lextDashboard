import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from'react-redux';
import Button from '../../components/Button';
import Modal from '../../components/Modal';
import SignaturePad from '../../components/SignaturePad';
import Pagination from '../../components/Pagenation';
import SearchComponent from '../../components/SearchInput';
import SlideModal from '../../components/SlideModal';
// import DatePicker from '../../components/DatePicker';
// import TimePicker from '../../components/TimePicker';
import { 
  Container,
  Grid,
  GridItem,
  ButtonContainer,
  ScrollableTableContainer
} from '../../utils/GlobalStyle/lextaCore';
import {
  Table,
  TableHead,
  TableBody,
  TableRow,
  TableCell,
  TableHeaderCell,
} from '../../components/Table';
import LazyAvatar from '../../components/LazyAvatar';
import { TruncateText } from '../../utils';
import {
  AvatarDetail,
  AvatarDetailWrapper,
  StatusField,
  PaymentMethodeField,
} from './content1Elements';
import { getAllpatientByDate } from '../../store/action/patientAction'

const ContentSatu = () => {
  const dispatch = useDispatch();
  const dataPatient = useSelector((state) => state.patien.patientList);
  useEffect(() => {
    dispatch(getAllpatientByDate())
  }, [dispatch]);


  const [isModalOpen, setModalOpen] = useState(false);
  const [isSideModalOpen, setSideModalIsOpen] = useState(false);
  const [isSuccssesSendTtd, setIsSuccssesSendTtd] = useState(false);
  const [dataDetail, seDataDetai] = useState({});
  const [isLoadingSearch, setIsloadingSearch] = useState(false);
  const [filteredData, setFilteredData] = useState(dataPatient);
  const [isPendaftaranOpen, setIsPendaftaranOpen] = useState(false);
  // const [date, setDate] = useState('');
  // const [time, setTime] = useState('');

  // const handleDateChange = (e) => setDate(e.target.value);
  // const handleTimeChange = (e) => setTime(e.target.value);


  const [currentPage, setCurrentPage] = useState(1);
  const [rowsPerPage, setRowsPerPage] = useState(5);

  const handleRowsPerPageChange = (newRowsPerPage) => {
    setRowsPerPage(newRowsPerPage);
    setCurrentPage(1);
  };

  const handlePageChange = (newPage) => {
    setCurrentPage(newPage);
  };

  const startIndex = (currentPage - 1) * rowsPerPage;
  const currentData = filteredData.slice(startIndex, startIndex + rowsPerPage);

  // const handleOpenModal = () => {
  //   setModalOpen(true);
  //   setIsSuccssesSendTtd(false);
  // };

  const handleCloseModal = () => {
    setModalOpen(false);
    setIsSuccssesSendTtd(false);
  };

  const handleSubmit = () => {
    setIsSuccssesSendTtd(true);
  };

  const handleCancel = () => {
    handleCloseModal();
    setIsSuccssesSendTtd(false);
  };

  const handleSearch = async (keyword) => {
    setIsloadingSearch(true);
    return new Promise((resolve) => {
      setTimeout(() => {
        const filtered = dataPatient.filter(item =>
          Object.values(item).some(val =>
            String(val).toLowerCase().includes(keyword.toLowerCase())
          )
        );
        setFilteredData(filtered.length > 0 ? filtered : dataPatient);
        setCurrentPage(1);  // Reset to the first page when search is performed
        setIsloadingSearch(false);
        resolve();
      }, 2000);
    });
  };

  const handleOpenSideModal = (datum) => {
    seDataDetai ({
      avatar: datum.avatar,
    });
    setSideModalIsOpen(true);
  };

  const handleCloseSideModal = () => {
    setSideModalIsOpen(false);
  };

  const handleOpenPendaftaran = () => {
    setIsPendaftaranOpen(true);
  };

  const handleClosePendaftaran = () => {
    setIsPendaftaranOpen(false);
  };



  return (
    <>
       <Grid direction={'row'} size={3}>
        <GridItem>
          <Button
            variant='contained'
            size='large'
            onClick={handleOpenPendaftaran}
          >
            Pendaftaran Jamaah
          </Button>

        </GridItem>
       </Grid>
      <Container>
        <Modal
          size="large"
          title="Pendaftaran Jamah"
          subtitle=""
          onClose={handleClosePendaftaran}
          // onSubmit={handleSubmit}
          onCancel={handleCancel}
          isOpen={isPendaftaranOpen}
        >
        </Modal>
        <SlideModal isOpen={isSideModalOpen} onClose={handleCloseSideModal} from="right">
          <h2>Slide Modal Content</h2>
          <p>This is the content of the slide modal.</p>
          <AvatarDetailWrapper>
            <AvatarDetail src={dataDetail.avatar} alt={`${dataDetail.name}'s avatar`} />
          </AvatarDetailWrapper>
          <Button onClick={handleCloseSideModal}>Close Modal</Button>
        </SlideModal>
        <Modal
          size="small"
          title={isSuccssesSendTtd ? "Thank you" : "Plese sign in the box below"}
          subtitle={isSuccssesSendTtd ? "You can close this popup" : "Make sure the signature looks liken the one in your id"}
          onClose={handleCloseModal}
          onSubmit={handleSubmit}
          onCancel={handleCancel}
          isOpen={isModalOpen}
        >
          <SignaturePad onCancel={handleCancel} onSubmit={handleSubmit}/>
        </Modal>
        <Grid direction={'row'} size={3}>
          <GridItem>
            <SearchComponent
              onSearch={handleSearch}
              isLoading={isLoadingSearch}
            />
          </GridItem>
          <GridItem>
            {/* <DatePicker label="Select Date:" value={date} onChange={handleDateChange} /> */}
          </GridItem>
          <GridItem>
            {/* <TimePicker label="Select Time:" value={time} onChange={handleTimeChange} /> */}
          </GridItem>
        </Grid>
        <Grid direction={'row'} size={12}>
          <GridItem>
            <ScrollableTableContainer>
              <Table>
                <TableHead>
                  <TableRow>
                    <TableHeaderCell>No</TableHeaderCell>
                    <TableHeaderCell>Avatar</TableHeaderCell>
                    <TableHeaderCell>Status</TableHeaderCell>
                    <TableHeaderCell>Patient</TableHeaderCell>
                    <TableHeaderCell>Payment</TableHeaderCell>
                    <TableHeaderCell>Doctor</TableHeaderCell>
                    <TableHeaderCell>Poli</TableHeaderCell>
                    <TableHeaderCell>Appointment Date</TableHeaderCell>
                    <TableHeaderCell>Action</TableHeaderCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  {currentData.map((datum, i) => (
                    <TableRow key={startIndex + i + 1}>
                      <TableCell>{startIndex + i + 1}</TableCell>
                      <TableCell>
                        <LazyAvatar src={datum.avatar} alt={`${datum.name}'s avatar`} />
                      </TableCell>
                      <TableCell>
                      <StatusField status={datum.status.status}>{datum.status.status}</StatusField>
                      </TableCell>
                      <TableCell>{TruncateText(datum.name, 20)}</TableCell>
                      <TableCell>
                        <PaymentMethodeField paymentMethod={datum.paymentMethod}>
                          {datum.paymentMethod}
                        </PaymentMethodeField>
                        </TableCell>
                      <TableCell>{datum.doctorName}</TableCell>
                      <TableCell>{datum.poli}</TableCell>
                      <TableCell>{datum.appointmentDate}</TableCell>
                      <TableCell>
                        <ButtonContainer>
                          {/* <Button onClick={handleOpenModal}>Add Signature</Button> */}
                            <Button variant='contained' onClick={() => handleOpenSideModal(datum)}>Detail</Button>
                        </ButtonContainer>
                      </TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </ScrollableTableContainer>
              <Pagination
                currentPage={currentPage}
                rowsPerPage={rowsPerPage}
                totalRows={filteredData.length}
                onPageChange={handlePageChange}
                onRowsPerPageChange={handleRowsPerPageChange}
              />
          </GridItem>
        </Grid>
      </Container>
    </>
  );
};

export default ContentSatu;
