import { Edges } from "@react-three/drei";

function Clear(ctx: WebGL2RenderingContext, r: number, g: number, b: number, a: number) {
    ctx.clearColor(r, g, b, a);
    ctx.clear(ctx.COLOR_BUFFER_BIT);
}

function AddBorder() {
    return (<>
        <Edges threshold={90} color="white" lineWidth={2} />
    </>
    )
}


export {
    Clear,
    AddBorder
}