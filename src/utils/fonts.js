import { Global } from "@mantine/core"
import retrophilia from '../../public/assets/fonts/retrophilia/Retrophilia.ttf'
import latoRegular from '../../public/assets/fonts/lato/Lato-Regular.ttf'

export function YarniaFonts() {
    return (
        <Global
            styles={[
                {
                    '@font-face': {
                        fontFamily: 'latoRegular',
                        src: `url('${latoRegular}') format("ttf")`,
                        fontWeight: 400,
                        fontStyle: 'normal',
                    }
                },
                {
                    '@font-face': {
                        fontFamily: 'retrophilia',
                        src: `url('${retrophilia}') format("ttf")`,
                        fontWeight: 700,
                        fontStyle: 'normal',
                    }
                }
            ]}
        />
    )
}