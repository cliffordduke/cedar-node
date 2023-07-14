import {Construct} from "constructs";
import {AwsCustomResource} from "aws-cdk-lib/custom-resources";

export interface PolicyStoreProps {
    validationSettings: { mode: "OFF" | "STRICT" }
}


export class PolicyStore extends Construct {
    constructor(scope: Construct, id: string, props: PolicyStoreProps) {
        super(scope, id);

        const policy = new AwsCustomResource(this, 'PolicyStore', {
            onCreate: {
                service: 'verifiedpermissions'
            }
        })

    }
}