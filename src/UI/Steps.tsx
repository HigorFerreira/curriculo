'use client';
import { Steps as AntSteps } from 'antd';
import styled from '@emotion/styled';

const Container = styled("div")(() => {
    return {
        color: 'var(--gray)',
        '.ant-steps-item-title': {
            color: 'var(--light) !important',
            fontWeight: 900,
        },
        '.ant-steps-item-description': {
            color: 'var(--gray) !important',
        },
        '.ant-steps-item-active': {
            '.ant-steps-icon-dot': {
                backgroundColor: 'var(--primary) !important'
            },
        },
        '.ant-steps-icon-dot': {
            backgroundColor: 'var(--gray) !important'
        },
        '.ant-steps-item-tail': {
            // color: 'var(--gray) !important'
            '&::after': {
                backgroundColor: 'var(--gray-40) !important',
            }
        },
    }
});

export default function Steps(props: Parameters<typeof AntSteps>['0']){
    return <Container>
        <AntSteps { ...props } />
    </Container>
}