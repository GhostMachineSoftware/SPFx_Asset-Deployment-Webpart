import { Version } from '@microsoft/sp-core-library';
import { BaseClientSideWebPart, IPropertyPaneConfiguration } from '@microsoft/sp-webpart-base';
export interface IAssetDeploymentWebPartProps {
    description: string;
}
export default class AssetDeploymentWebPart extends BaseClientSideWebPart<IAssetDeploymentWebPartProps> {
    render(): void;
    protected readonly dataVersion: Version;
    protected getPropertyPaneConfiguration(): IPropertyPaneConfiguration;
}
//# sourceMappingURL=AssetDeploymentWebPart.d.ts.map