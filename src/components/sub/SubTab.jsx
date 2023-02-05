import tabData from '../../data/tab/tab.json';
import { useLayoutEffect, useState } from "react";
// import { useEffect } from 'react';
import { useLocation , NavLink , useParams } from "react-router-dom";
import * as SubTabstyled from '../style/SubTab.style';

const SubTab = (props) => {

    const {pathname} = useLocation();
    // const [currentFirstUrl,setCurrentFirstUrl] = useState(null);
    let [isActive,setIsActive] = useState(0);
    let [categoryName,setCategoryName] = useState(
        {
            imgNum: '',
            tabInfoTxt: '',
            tabDataState: []
        }
    );
    let [idData] = useState(props.commonContents.kartDescDepth);
    let {id} = useParams();
    id = parseInt(id);
    idData = idData.find(x => x.id === id);

    // useEffect(() => {
    //     const splitUrl = pathname?.split('/') ?? null;
    //     const location = splitUrl?.length > 1 ? splitUrl[1] : null;
    //     setCurrentFirstUrl(location);
    // },[pathname]);

    // console.log(currentFirstUrl);

    useLayoutEffect(() => {
        if(pathname.startsWith('/mode')){
            setCategoryName(
                {
                    imgNum: '1',
                    tabInfoTxt: '모드',
                    tabDataState: tabData.mode
                }
            );
        } else if(pathname.startsWith('/kartbody')){
            setCategoryName({
                imgNum: '2',
                tabInfoTxt: '카트바디',
                tabDataState: tabData.kartbody
            });
        }
    },[pathname])

    const handleItemClick = idx => {
        setIsActive(idx);
    }

    return ( 
        <SubTabstyled.TabWrap>
            <SubTabstyled.TabWrapInner>
                <SubTabstyled.TabInfo>
                    <SubTabstyled.TabInfoTxt num={categoryName.imgNum}>{categoryName.tabInfoTxt}</SubTabstyled.TabInfoTxt>
                </SubTabstyled.TabInfo>
                <SubTabstyled.TabList>
                    {categoryName.tabDataState.map((item, index) => {
                        return (
                            <SubTabstyled.TabItem key={index} onClick={() => handleItemClick(index)}>
                                <NavLink to={item.route + idData.id} className={({isActive}) => isActive ? 'active' : 'disabled'}>{item.name}</NavLink>
                            </SubTabstyled.TabItem>
                        )})
                    }
                </SubTabstyled.TabList>
            </SubTabstyled.TabWrapInner>
        </SubTabstyled.TabWrap>
    );
}

export default SubTab;