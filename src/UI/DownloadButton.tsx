'use client';
import { useRef } from 'react';
import { Button, message } from 'antd';
import { createPortal } from 'react-dom';
import { GoDownload as DownloadIcon } from "react-icons/go";

function CurriculoDownloadButton(){
    const linkRef = useRef<HTMLAnchorElement>(null);
    return <>
        {typeof window !== 'undefined' && createPortal(
            <a ref={ linkRef } href='/HigorFerreira.pdf' download={'HigorFerreiraResume.pdf'} style={{ display: 'none' }}></a>,
            window.document.body
        )}
        <Button icon={<DownloadIcon />} onClick={() => {
            linkRef.current?.click();
        }}>
            Currículo PDF
        </Button>
    </>
}

function DegreeHistoryDownloadButton(){
    const linkRef = useRef<HTMLAnchorElement>(null);
    return <>
        {typeof window !== 'undefined' && createPortal(
            <a ref={ linkRef } href='/HigorFerreiraDegreeHistory.pdf' download={'HigorFerreiraDegreeHistory.pdf'} style={{ display: 'none' }}></a>,
            window.document.body
        )}
        <Button icon={<DownloadIcon />} onClick={() => {
            linkRef.current?.click();
        }}>
            Histórico
        </Button>
    </>
}

function CertDownloadButton(){
    const linkRef = useRef<HTMLAnchorElement>(null);
    return <>
        {typeof window !== 'undefined' && createPortal(
            <a ref={ linkRef } href='/HigorFerreiraDegreeHistory.pdf' download={'HigorFerreiraDegreeHistory.pdf'} style={{ display: 'none' }}></a>,
            window.document.body
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

export default function DownloadButtons() {
    return <div className="flex flex-wrap _8gap _20mt _20mb">
        <CurriculoDownloadButton />
        <DegreeHistoryDownloadButton />
        <CertDownloadButton />
    </div>;
}