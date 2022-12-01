import { useCallback, useState } from 'react';

import Button from '@bodynarf/react.components/components/button';
import Text from '@bodynarf/react.components/components/primitives/text';

export const Home = (): JSX.Element => {
    const [t, s] = useState('');
    const [g, l] = useState(false);

    const toggle = useCallback(() => l(x => !x), []);

    return (
        <div>
            <h1 className="title is-3">Home</h1>
            <h1>Hello, world!</h1>
            <span>{t}</span>
            <hr />
            <Text
                onValueChange={s}
                defaultValue={t}
                className={"mb-4"}
            />
            <Button
                caption="Change"
                type="primary"
                rounded={g}
                onClick={() => toggle()}
            />
            <br />
        </div>
    );
};
