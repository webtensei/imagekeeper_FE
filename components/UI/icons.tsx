
export const cloudUpload = (width: number, height: number, color: string): JSX.Element => {
    return (
        <svg
            width={width}
            height={height}
            viewBox="0 0 24 24"
            fill="none"
            stroke={color}
            xmlns="http://www.w3.org/2000/svg"
        >
            <path
                d="M6.99996 18C5.75223 18 4.55561 17.5259 3.67334 16.682C2.79107 15.8381 2.29541 14.6935 2.29541 13.5C2.29541 12.3065 2.79107 11.1619 3.67334 10.318C4.55561 9.47412 5.75223 9.00001 6.99996 9.00001C7.29464 7.68719 8.15672 6.5335 9.39654 5.79273C10.0104 5.42594 10.6986 5.17156 11.4217 5.04412C12.1449 4.91669 12.8888 4.91869 13.6111 5.05001C14.3333 5.18133 15.0198 5.43941 15.6312 5.80949C16.2427 6.17958 16.7672 6.65443 17.1747 7.20694C17.5823 7.75945 17.8649 8.37879 18.0065 9.02961C18.1481 9.68043 18.1459 10.35 18 11H19C19.9282 11 20.8185 11.3688 21.4748 12.0251C22.1312 12.6815 22.5 13.5718 22.5 14.5C22.5 15.4283 22.1312 16.3185 21.4748 16.9749C20.8185 17.6313 19.9282 18 19 18H18"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
            />
            <path
                d="M9 15L12 12M12 12L15 15M12 12V21"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
            />
        </svg>
    );
};

export const auth = <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2}
                         stroke="currentColor" className="w-6 h-6">
    <path strokeLinecap="round" strokeLinejoin="round"
          d="M15.75 9V5.25A2.25 2.25 0 0013.5 3h-6a2.25 2.25 0 00-2.25 2.25v13.5A2.25 2.25 0 007.5 21h6a2.25 2.25 0 002.25-2.25V15m3 0l3-3m0 0l-3-3m3 3H9"/>
</svg>

export const download = <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor"
                             xmlns="http://www.w3.org/2000/svg">
    <path
        d="M4 17V19C4 19.5304 4.21071 20.0391 4.58579 20.4142C4.96086 20.7893 5.46957 21 6 21H18C18.5304 21 19.0391 20.7893 19.4142 20.4142C19.7893 20.0391 20 19.5304 20 19V17M7 11L12 16M12 16L17 11M12 16V4"
        strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
</svg>

export const edit = <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor"
                         xmlns="http://www.w3.org/2000/svg">
    <path
        d="M7 7H6C5.46957 7 4.96086 7.21071 4.58579 7.58579C4.21071 7.96086 4 8.46957 4 9V18C4 18.5304 4.21071 19.0391 4.58579 19.4142C4.96086 19.7893 5.46957 20 6 20H15C15.5304 20 16.0391 19.7893 16.4142 19.4142C16.7893 19.0391 17 18.5304 17 18V17"
        strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
    <path
        d="M16 4.99998L19 7.99998M20.385 6.58499C20.7788 6.19114 21.0001 5.65697 21.0001 5.09998C21.0001 4.543 20.7788 4.00883 20.385 3.61498C19.9912 3.22114 19.457 2.99988 18.9 2.99988C18.343 2.99988 17.8088 3.22114 17.415 3.61498L9 12V15H12L20.385 6.58499Z"
        strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
</svg>

export const del = <svg width="24" height="24" stroke="currentColor" viewBox="0 0 24 24" fill="none"
                        xmlns="http://www.w3.org/2000/svg">
    <path
        d="M4 7H20M5 7L6 19C6 19.5304 6.21071 20.0391 6.58579 20.4142C6.96086 20.7893 7.46957 21 8 21H16C16.5304 21 17.0391 20.7893 17.4142 20.4142C17.7893 20.0391 18 19.5304 18 19L19 7M9 7V4C9 3.73478 9.10536 3.48043 9.29289 3.29289C9.48043 3.10536 9.73478 3 10 3H14C14.2652 3 14.5196 3.10536 14.7071 3.29289C14.8946 3.48043 15 3.73478 15 4V7M10 12L14 16M14 12L10 16"
        strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
</svg>

export const check = <svg width="24" height="24" stroke="currentColor" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M5 12L10 17L20 7" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
</svg>
export const x = <svg xmlns="http://www.w3.org/2000/svg" width="24" stroke="currentColor" height="24" viewBox="0 0 24 24" fill="none">
    <path d="M18 6L6 18M6 6L18 18"  strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
</svg>


