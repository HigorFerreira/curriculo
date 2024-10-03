'use client';
import { useRef } from 'react';
import { Button, message } from 'antd';
import { createPortal } from 'react-dom';
import { GoDownload as DownloadIcon } from "react-icons/go";

export function CurriculoDownloadButton(){
    const linkRef = useRef<HTMLAnchorElement>(null);
    return <>
        {createPortal(
            <a ref={ linkRef } href='/HigorFerreira.pdf' download={'HigorFerreiraResume.pdf'} style={{ display: 'none' }}></a>,
            document.body
        )}
        <Button icon={<DownloadIcon />} onClick={() => {
            linkRef.current?.click();
        }}>
            Currículo PDF
        </Button>
    </>
}

export function DegreeHistoryDownloadButton(){
    const linkRef = useRef<HTMLAnchorElement>(null);
    return <>
        {createPortal(
            <a ref={ linkRef } href='/HigorFerreiraDegreeHistory.pdf' download={'HigorFerreiraDegreeHistory.pdf'} style={{ display: 'none' }}></a>,
            document.body
        )}
        <Button icon={<DownloadIcon />} onClick={() => {
            linkRef.current?.click();
        }}>
            Histórico
        </Button>
    </>
}

export function CertDownloadButton(){
    const linkRef = useRef<HTMLAnchorElement>(null);
    return <>
        {createPortal(
            <a ref={ linkRef } href='/HigorFerreiraDegreeHistory.pdf' download={'HigorFerreiraDegreeHistory.pdf'} style={{ display: 'none' }}></a>,
            document.body
        )}
        <Button
            title='Certificado de Conclusão de Curso'
            variant="outlined"
            icon={<DownloadIcon />}
            onClick={() => {
                message.info('Aguardando emissão de Certificado de Conclusão de Curso pela PUC-GO', 4.8)
            }}
        >
            Certificado
        </Button>
    </>
}