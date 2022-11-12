import Link from 'next/link';
import { Box } from 'components';
import Image from 'next/image';
import logo from 'public/logoipsum1.svg';

export default function Logo(): JSX.Element {
    return (
        <Link href="/">
            <Box className="relative flex justify-center mb-5 cursor-pointer">
                <Image src={logo} alt="logo" />
            </Box>
        </Link>
    );
}
