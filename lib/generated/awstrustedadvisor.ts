import { AccessLevelList } from "../shared/access-level";
import { PolicyStatement } from "../shared";

/**
 * Statement provider for service [trustedadvisor](https://docs.aws.amazon.com/service-authorization/latest/reference/list_awstrustedadvisor.html).
 *
 * @param sid [SID](https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_sid.html) of the statement
 */
export class Trustedadvisor extends PolicyStatement {
  public servicePrefix = 'trustedadvisor';

  /**
   * Statement provider for service [trustedadvisor](https://docs.aws.amazon.com/service-authorization/latest/reference/list_awstrustedadvisor.html).
   *
   * @param sid [SID](https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_sid.html) of the statement
   */
  constructor (sid?: string) {
    super(sid);
  }

  /**
   * Grants permission to view the AWS Support plan and various AWS Trusted Advisor preferences
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/awssupport/latest/user/security-trusted-advisor.html#trusted-advisor-operations
   */
  public toDescribeAccount() {
    this.to('trustedadvisor:DescribeAccount');
    return this;
  }

  /**
   * Grants permission to view if the AWS account has enabled or disabled AWS Trusted Advisor
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/awssupport/latest/user/security-trusted-advisor.html#trusted-advisor-operations
   */
  public toDescribeAccountAccess() {
    this.to('trustedadvisor:DescribeAccountAccess');
    return this;
  }

  /**
   * Grants permission to view details for the check items
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/awssupport/latest/user/security-trusted-advisor.html#trusted-advisor-operations
   */
  public toDescribeCheckItems() {
    this.to('trustedadvisor:DescribeCheckItems');
    return this;
  }

  /**
   * Grants permission to view the refresh statuses for AWS Trusted Advisor checks
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/awssupport/latest/user/security-trusted-advisor.html#trusted-advisor-operations
   */
  public toDescribeCheckRefreshStatuses() {
    this.to('trustedadvisor:DescribeCheckRefreshStatuses');
    return this;
  }

  /**
   * Grants permission to view AWS Trusted Advisor check summaries
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/awssupport/latest/user/security-trusted-advisor.html#trusted-advisor-operations
   */
  public toDescribeCheckSummaries() {
    this.to('trustedadvisor:DescribeCheckSummaries');
    return this;
  }

  /**
   * Grants permission to view details for AWS Trusted Advisor checks
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/awssupport/latest/user/security-trusted-advisor.html#trusted-advisor-operations
   */
  public toDescribeChecks() {
    this.to('trustedadvisor:DescribeChecks');
    return this;
  }

  /**
   * Grants permission to view the notification preferences for the AWS account
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/awssupport/latest/user/security-trusted-advisor.html#trusted-advisor-operations
   */
  public toDescribeNotificationPreferences() {
    this.to('trustedadvisor:DescribeNotificationPreferences');
    return this;
  }

  /**
   * Grants permission to view if the AWS account meets the requirements to enable the organizational view feature
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/awssupport/latest/user/security-trusted-advisor.html#trusted-advisor-operations
   */
  public toDescribeOrganization() {
    this.to('trustedadvisor:DescribeOrganization');
    return this;
  }

  /**
   * Grants permission to view the linked AWS accounts that are in the organization
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/awssupport/latest/user/security-trusted-advisor.html#trusted-advisor-operations
   */
  public toDescribeOrganizationAccounts() {
    this.to('trustedadvisor:DescribeOrganizationAccounts');
    return this;
  }

  /**
   * Grants permission to view details for organizational view reports, such as the report name, runtime, date created, status, and format
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/awssupport/latest/user/security-trusted-advisor.html#trusted-advisor-operations
   */
  public toDescribeReports() {
    this.to('trustedadvisor:DescribeReports');
    return this;
  }

  /**
   * Grants permission to view information about organizational view reports, such as the AWS Regions, check categories, check names, and resource statuses
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/awssupport/latest/user/security-trusted-advisor.html#trusted-advisor-operations
   */
  public toDescribeServiceMetadata() {
    this.to('trustedadvisor:DescribeServiceMetadata');
    return this;
  }

  /**
   * Grants permission to exclude recommendations for AWS Trusted Advisor checks
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/awssupport/latest/user/security-trusted-advisor.html#trusted-advisor-operations
   */
  public toExcludeCheckItems() {
    this.to('trustedadvisor:ExcludeCheckItems');
    return this;
  }

  /**
   * Grants permission to create a report for AWS Trusted Advisor checks in your organization
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/awssupport/latest/user/security-trusted-advisor.html#trusted-advisor-operations
   */
  public toGenerateReport() {
    this.to('trustedadvisor:GenerateReport');
    return this;
  }

  /**
   * Grants permission to include recommendations for AWS Trusted Advisor checks
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/awssupport/latest/user/security-trusted-advisor.html#trusted-advisor-operations
   */
  public toIncludeCheckItems() {
    this.to('trustedadvisor:IncludeCheckItems');
    return this;
  }

  /**
   * Grants permission to view, in the Trusted Advisor console, all of the accounts in an AWS organization that are contained by a root or organizational unit (OU)
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/awssupport/latest/user/security-trusted-advisor.html#trusted-advisor-operations
   */
  public toListAccountsForParent() {
    this.to('trustedadvisor:ListAccountsForParent');
    return this;
  }

  /**
   * Grants permission to view, in the Trusted Advisor console, all of the organizational units (OUs) in a parent organizational unit or root
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/awssupport/latest/user/security-trusted-advisor.html#trusted-advisor-operations
   */
  public toListOrganizationalUnitsForParent() {
    this.to('trustedadvisor:ListOrganizationalUnitsForParent');
    return this;
  }

  /**
   * Grants permission to view, in the Trusted Advisor console, all of the roots that are defined in an AWS organization
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/awssupport/latest/user/security-trusted-advisor.html#trusted-advisor-operations
   */
  public toListRoots() {
    this.to('trustedadvisor:ListRoots');
    return this;
  }

  /**
   * Grants permission to refresh an AWS Trusted Advisor check
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/awssupport/latest/user/security-trusted-advisor.html#trusted-advisor-operations
   */
  public toRefreshCheck() {
    this.to('trustedadvisor:RefreshCheck');
    return this;
  }

  /**
   * Grants permission to enable or disable AWS Trusted Advisor for the account
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/awssupport/latest/user/security-trusted-advisor.html#trusted-advisor-operations
   */
  public toSetAccountAccess() {
    this.to('trustedadvisor:SetAccountAccess');
    return this;
  }

  /**
   * Grants permission to enable the organizational view feature for AWS Trusted Advisor
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/awssupport/latest/user/security-trusted-advisor.html#trusted-advisor-operations
   */
  public toSetOrganizationAccess() {
    this.to('trustedadvisor:SetOrganizationAccess');
    return this;
  }

  /**
   * Grants permission to update notification preferences for AWS Trusted Advisor
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/awssupport/latest/user/security-trusted-advisor.html#trusted-advisor-operations
   */
  public toUpdateNotificationPreferences() {
    this.to('trustedadvisor:UpdateNotificationPreferences');
    return this;
  }

  protected accessLevelList: AccessLevelList = {
    "Read": [
      "DescribeAccount",
      "DescribeAccountAccess",
      "DescribeCheckItems",
      "DescribeCheckRefreshStatuses",
      "DescribeCheckSummaries",
      "DescribeChecks",
      "DescribeNotificationPreferences",
      "DescribeOrganization",
      "DescribeOrganizationAccounts",
      "DescribeReports",
      "DescribeServiceMetadata",
      "ListAccountsForParent",
      "ListOrganizationalUnitsForParent",
      "ListRoots"
    ],
    "Write": [
      "ExcludeCheckItems",
      "GenerateReport",
      "IncludeCheckItems",
      "RefreshCheck",
      "SetAccountAccess",
      "SetOrganizationAccess",
      "UpdateNotificationPreferences"
    ]
  };

  /**
   * Adds a resource of type checks to the statement
   *
   * https://docs.aws.amazon.com/awssupport/latest/APIReference/API_TrustedAdvisorCheckDescription.html
   *
   * @param categoryCode - Identifier for the categoryCode.
   * @param checkId - Identifier for the checkId.
   * @param account - Account of the resource; defaults to empty string: all accounts.
   * @param region - Region of the resource; defaults to empty string: all regions.
   * @param partition - Partition of the AWS account [aws, aws-cn, aws-us-gov]; defaults to `aws`.
   */
  public onChecks(categoryCode: string, checkId: string, account?: string, region?: string, partition?: string) {
    var arn = 'arn:${Partition}:trustedadvisor:${Region}:${Account}:checks/${CategoryCode}/${CheckId}';
    arn = arn.replace('${CategoryCode}', categoryCode);
    arn = arn.replace('${CheckId}', checkId);
    arn = arn.replace('${Account}', account || '*');
    arn = arn.replace('${Region}', region || '*');
    arn = arn.replace('${Partition}', partition || 'aws');
    return this.on(arn);
  }
}
