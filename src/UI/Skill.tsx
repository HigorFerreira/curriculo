/* eslint-disable @typescript-eslint/ban-ts-comment */
'use client';
import styled from '@emotion/styled';
import Progress from './Progress';

// @ts-ignore
const Container = styled("div")(() => {
    return {
        display: 'grid',
        gridTemplateColumns: 'auto 1fr',
        columnGap: 12,
        rowGap: 8,
        '> *': {
            textTransform: 'uppercase',
            '&:nth-child(1)': {
                fontWeight: 900,
                color: 'var(--primary)',
            },
            '&:nth-child(2)': {
                
            },
            '&:nth-child(3)': {
                gridColumn: 'span 2',
            },
        }
    }
});

export default function Skill({ percent, title }: { percent: number, title: string }){
	return <Container>
        <p>{ percent.toString().padStart(2, '0') }%</p>
        <p>{ title }</p>
		<Progress percent={percent} showInfo={false} />
	</Container>
}