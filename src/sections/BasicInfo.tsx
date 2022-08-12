import { GitHub, Linkedin, Twitter, UserPlus, Youtube } from 'react-feather';
import { useMediaQuery } from 'react-responsive';
import styled from 'styled-components';
import ethereum from 'url:../../assets/skills/ethereum.webp';
import telegram from 'url:../../assets/skills/telegram.png';

import { Table } from '../components/Table';

const ProfilePicture = styled.img`
    width: 100%;
`;

const Properties = styled.div`
    display: flex;
    flex-direction: column;
    flex: 1;
    a {
        color: var(--color-main);
        text-decoration: none;
        &:hover {
            text-decoration: underline;
        }
    }
`;

const KeyValue = styled.div`
    display: flex;
`;

const Key = styled.b``;

const Value = styled.div``;

const Icon = styled.div<{ mobile: boolean }>`
    display: ${({ mobile }) => (mobile ? 'none' : 'block')};
    color: var(--theme-text-main);
    svg {
        width: 1.4em;
        height: 1.4em;
    }
    @media screen and (max-width: 765px) {
        display: ${({ mobile }) => (mobile ? 'block' : 'none')};
        svg {
            width: 1.8em;
            height: 1.8em;
        }
    }
`;

export const Socials = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 1.4rem;
    align-self: center;
    justify-self: flex-end;
    justify-content: flex-start;
    margin-top: auto;
    flex-grow: 1;
    align-items: flex-end;
    margin-top: 1rem;
    img {
        height: 1.4rem;
    }
    > a {
        &:hover {
            transform: scale(1.1);
        }
    }
`;

const DesktopInfo = () => {
    return (
        <Properties>
            {[
                ['Name', 'Ryan Cheevers-Brown'],
                ['Bio', 'Blue team, photos, and sometimes I make shit'],
                [
                    'Tel',
                    <a href="tel:0031618925911" target="_blank">
                        +1 (413) 923-2392
                    </a>,
                ],
                [
                    'Github',
                    <a href="https://github.com/icefisher225" target="_blank">
                        lucemans
                    </a>,
                ],
                [
                    'Twitter',
                    <a href="https://twitter.com/icefisher225" target="_blank">
                        @lucemansnl
                    </a>,
                ],
                [
                    'Telegram',
                    <a href="https://t.me/ma1ist4ir3" target="_blank">
                        @lucemans
                    </a>,
                ],
                [
                    'Linkedin',
                    <a href="https://linkedin.com/in/ryan-cheevers-brown-7047931ba" target="_blank">
                        Luc van Kampen
                    </a>,
                ],
            ].map((a, index) => (
                <KeyValue key={index}>
                    <Key>{a.at(0)}</Key>:&nbsp;
                    <Value>{a.at(1)}</Value>
                </KeyValue>
            ))}
        </Properties>
    );
};

const MobileInfo = () => {
    return (
        <>
            <Properties>
                {[
                    ['Name', 'Ryan Cheevers-Brown'],
                    ['Bio', 'Blue Team, Photo'],
                    [
                        'Tel',
                        <a href="tel:0031618925911" target="_blank">
                            +1 (413) 923-2392
                        </a>,
                    ],
                ].map((a, index) => (
                    <KeyValue key={index}>
                        <Key>{a.at(0)}</Key>:&nbsp;
                        <Value>{a.at(1)}</Value>
                    </KeyValue>
                ))}
                <Socials>
                    {[
                        {
                            e: <Twitter />,
                            a: 'https://twitter.com/icefisher225',
                            l: 'Twitter',
                        },
                        {
                            e: <GitHub />,
                            a: 'https://github.com/icefisher225',
                            l: 'Github',
                        },
                        {
                            e: <Linkedin />,
                            a: 'https://linkedin.com/in/ryan-cheevers-brown-7047931ba',
                            l: 'Linkedin',
                        },
                        {
                            e: <img src={telegram} />,
                            a: 'https://t.me/ma1ist4ir3',
                            l: 'Telegram',
                        },
                    ].map((v) => (
                        <a href={v.a} target="_blank" aria-label={v.l}>
                            {v.e}
                        </a>
                    ))}
                </Socials>
            </Properties>
        </>
    );
};

export const BasicInfo = () => {
    const isDesktopOrMobile = useMediaQuery({ query: '(min-width: 900px)' });

    return (
        <Table header="Basic Info">
            {() => [
                <div className="flex-grow-0 w-full gap-4 md:gap-0 md:w-52 flex justify-between column">
                    <div className="w-52 md:w-full">
                        <ProfilePicture
                            src="https://header.luc.computer/public/500x500.webp"
                            alt="Profile Picture"
                            width="200"
                            height="200"
                        />
                    </div>
                    <a href="/public/lucemans.vcf" aria-label="Add to Contacts">
                        <Icon mobile={true}>
                            <UserPlus />
                        </Icon>
                    </a>
                </div>,
                <div className="column flex justify-between">
                    {isDesktopOrMobile ? <DesktopInfo /> : <MobileInfo />}
                    <a href="/public/lucemans.vcf" aria-label="Add to Contacts">
                        <Icon mobile={false}>
                            <UserPlus />
                        </Icon>
                    </a>
                </div>,
            ]}
        </Table>
    );
};
