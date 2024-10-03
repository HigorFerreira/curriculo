'use client';
import styled from '@emotion/styled';
import { Progress as InnerProgress } from 'antd';


const Container = styled("div")(() => {
    return {
        'span': {
            color: 'var(--gray) !important'
        },
        '.ant-progress-bg': {
            '&::after': {
                backgroundColor: 'var(--primary) !important'
            }
        }
    }
})

export default function Progress(props: Parameters<typeof InnerProgress>[0]){
    return <Container>
        <InnerProgress { ...props } />
    </Container>
};