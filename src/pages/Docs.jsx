export default function Docs() {
    return (
        <>
            <dl classname="row">
                <dt classname="col-sm-3">Term</dt>
                <dd classname="col-sm-9">definition</dd>
                <dt classname="col-sm-3">Term</dt>
                <dd classname="col-sm-9">definition</dd>
                <dt classname="col-sm-3 text-truncate">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                </dt>
                <dd classname="col-sm-9">Term</dd>
                <dt classname="col-sm-3">Nesting</dt>
                <dd classname="col-sm-9">
                    <dl classname="row">
                        <dt classname="col-sm-4">Nested title</dt>
                        <dd classname="col-sm-8">Nested definition</dd>
                    </dl>
                </dd>
            </dl>
        </>
    )
}