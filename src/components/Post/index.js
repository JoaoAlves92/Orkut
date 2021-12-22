import React from 'react';
import Box from '../Box';
import styled from 'styled-components';
import ThumbUpAltOutlinedIcon from '@material-ui/icons/ThumbUpAltOutlined';
import ChatBubbleOutlineOutlinedIcon from '@material-ui/icons/ChatBubbleOutlineOutlined';

const PostStyle = styled.div`
    .texto {
        margin-top: 0.5rem;
    }

    .headPost {
        display: flex;
        align-items: center;
        margin-bottom: 1rem;
    }

    .headPost___container-img {
        height: 2.5rem;
        width: 2.5rem;
        border-radius: 50%;
    }

    .headPost___texto {
        font-weight: 700;
        margin-left: 1rem;
        text-align: justify;
    }

    .navPost {
        display: flex;
        margin-top: 1rem;
    }
`;

export default function Post({post, usuario}){
    return(
        <Box>
            <PostStyle>
                <div className="headPost">
                    <div className="headPost___container-img">
                        <img src="https://alurakut.vercel.app/default_profile.svg"/>
                    </div>
                    <p className="headPost___texto">Nome do Usuario</p>
                </div>
                <img src="https://s2.glbimg.com/slaVZgTF5Nz8RWqGrHRJf0H1PMQ=/0x0:800x450/984x0/smart/filters:strip_icc()/i.s3.glbimg.com/v1/AUTH_59edd422c0c84a879bd37670ae4f538a/internal_photos/bs/2019/U/e/NTegqdSe6SoBAoQDjKZA/cachorro.jpg"/>

                <div className="navPost">
                    <ThumbUpAltOutlinedIcon style={{ marginRight: '0.5rem' }}/>
                    <ChatBubbleOutlineOutlinedIcon/>
                </div>
                <p style={{ fontWeight: 700, marginTop: '0.5rem' }}>106.827 curtidas</p>
                <p className="texto"><span style={{fontWeight: 700}}>Nome do usuario</span> Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi sodales elit sit amet dignissim venenatis. Etiam nisl tortor, dictum eget justo id, lacinia euismod mauris. Phasellus mattis varius cursus. Phasellus vitae varius nibh, et ultricies eros. Mauris varius at velit vel iaculis. Sed eget fringilla metus. Duis ultrices consectetur ullamcorper. Sed egestas et justo eu tincidunt. Mauris vitae rhoncus ipsum, sodales volutpat lacus. Aenean volutpat at neque sit amet rhoncus.</p>
            </PostStyle>
        </Box>
    );
}