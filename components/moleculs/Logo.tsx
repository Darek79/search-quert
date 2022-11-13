import Link from 'next/link';
import { Box } from 'components';
import Image from 'next/image';
import logo from 'public/logoipsum1.svg';

export default function Logo(): JSX.Element {
    return (
        <Box className="relative flex justify-center mb-5">
            <Link href="/">
                <a className="cursor-pointer">
                    <Image src={logo} alt="logo" />
                </a>
            </Link>
        </Box>
    );
}
