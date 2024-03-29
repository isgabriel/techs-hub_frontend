import { useContext } from "react";
import { DashInfo } from "../../components/DashInfo/DashInfo";
import { ModalCreate } from "../../components/Modal/ModalCreate/ModalCreate";
import { ModalUpdate } from "../../components/Modal/ModalUpdate/ModalUpdate";
import { TechList } from "../../components/TechList/TechList";
import { TechContext } from "../../Providers/TechContext/TechContext";
import {
    ButtonAddTech,
    DivTecnologies,
    MainDash,
    SectionTecnologies,
    TecnologiesTitle,
} from "./style";

export function Dashboard() {
    const { isModalVisible, setIsModalVisible } = useContext(TechContext);
    const { techList, isModalUpdateVisible } = useContext(TechContext);
    return (
        <MainDash>
            {isModalVisible && <ModalCreate />}
            {isModalUpdateVisible && <ModalUpdate />}
            <DashInfo />
            <SectionTecnologies>
                <DivTecnologies>
                    <TecnologiesTitle>Tecnologias</TecnologiesTitle>

                    <ButtonAddTech onClick={() => setIsModalVisible(true)}>
                        +
                    </ButtonAddTech>
                </DivTecnologies>
                <TechList />
            </SectionTecnologies>
        </MainDash>
    );
}
