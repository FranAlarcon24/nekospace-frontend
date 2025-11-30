import React from "react";
import { Card } from "react-bootstrap";
import { Image } from 'react-bootstrap';
import ButtonL from "../molecules/ButtonL";
import CBody from '../molecules/CBody';
import { useNavigate } from "react-router-dom";


function ProyectCard({ proyect }) {
    const navigate = useNavigate();

    return (
        <Card style={{ width: '20rem'}} className="m-2">
            <Image src={proyect?.image} alt={proyect?.name} className="card-img" />
            <Card.Body className="d-flex flex-column p-3">
                <CBody
                titulo={proyect?.name}
                descripcion={proyect?.descripcion}
                />
                <ButtonL href={proyect.repoUrl} target="_blank" variant="secondary">
                    ver mas
                </ButtonL>
            </Card.Body>
        </Card>
        
            
    );
};

export default ProyectCard;